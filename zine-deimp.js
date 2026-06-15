/** https://zinelibrary.org/theme/scripts/zine-deimp.js
 *  see also the reverse tool: https://humaniterations.net/imposedonline/
 *
 * zine-deimp.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Drop-in script that intercepts clicks on imposed zine PDF links, fetches the
 * PDF, reverses the imposition (reconstructing pages in reading order), and
 * triggers a download of the de-imposed PDF — all client-side, no server needed.
 *
 * INSTALL — add once to every page (head or end of body):
 *
 *   <script src="/scripts/zine-deimp.js"></script>
 *
 * That's it. Any <a href="*.pdf"> on the same origin is intercepted.
 *
 * ── OPTIONAL CONFIG ──────────────────────────────────────────────────────────
 * Set window.ZINE_DEIMP_CONFIG before the script tag:
 *
 *   <script>
 *   window.ZINE_DEIMP_CONFIG = {
 *     // CSS selector for links to intercept.
 *     // Default catches any same-origin <a> whose href ends in .pdf
 *     selector: 'a[href$=".pdf"]',
 *
 *     // Restrict to same-origin links only. Set false only if your PDFs
 *     // are on a separate subdomain with CORS headers.
 *     sameOriginOnly: true,
 *
 *     // pdf-lib CDN (override to self-host)
 *     pdfLibUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js',
 *
 *     // Suffix appended to the downloaded filename before .pdf
 *     filenameSuffix: '_reading',
 *
 *     // Called when processing starts/ends — use to show your own UI feedback
 *     onStart:    (anchor) => {},
 *     onComplete: (anchor) => {},
 *     onError:    (anchor, err) => {},
 *   };
 *   </script>
 *   <script src="/scripts/zine-deimp.js"></script>
 *
 * ── PER-LINK OVERRIDES ───────────────────────────────────────────────────────
 *
 *   <!-- Force opt-in regardless of selector -->
 *   <a href="/any-path" data-zine-deimp>Read this zine</a>
 *
 *   <!-- Force opt-out — behaves as a normal PDF link -->
 *   <a href="/manual.pdf" data-zine-deimp="off">Download manual</a>
 *
 * ── HOW DE-IMPOSITION WORKS ──────────────────────────────────────────────────
 * An imposed saddle-stitch zine PDF has S spreads (S must be even, so that
 * N = S×2 is divisible by 4). For sheet s (0-based), with N total pages:
 *
 *   Spread s×2   (front):  left page = N−2s−1,  right page = 2s
 *   Spread s×2+1 (back):   left page = 2s+1,    right page = N−2s−2
 *
 * The inverse map sends each reading page p → (spreadIndex, left|right).
 * Each output page is produced by creating a portrait page (halfW × H) and
 * drawing the spread positioned so only the correct half is visible.
 * ─────────────────────────────────────────────────────────────────────────────
 */
(function () {
  'use strict';

  // ── Config ──────────────────────────────────────────────────────────────────
  var cfg = Object.assign({
    selector:      'a[href$=".pdf"]',
    sameOriginOnly: false,
    pdfLibUrl:     'https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js',
    filenameSuffix: '_reading',
    onStart:    function() {},
    onComplete: function() {},
    onError:    function() {},
  }, window.ZINE_DEIMP_CONFIG || {});

  // ── pdf-lib loader ───────────────────────────────────────────────────────────
  var pdfLibReady   = false;
  var pdfLibLoading = false;
  var pdfLibQueue   = [];

  function loadPdfLib(cb) {
    if (pdfLibReady) return cb();
    pdfLibQueue.push(cb);
    if (pdfLibLoading) return;
    pdfLibLoading = true;
    var s = document.createElement('script');
    s.src = cfg.pdfLibUrl;
    s.onload = function () {
      pdfLibReady = true;
      pdfLibQueue.forEach(function(fn) { fn(); });
      pdfLibQueue = [];
    };
    s.onerror = function () {
      console.error('[zine-deimp] Failed to load pdf-lib from', cfg.pdfLibUrl);
      pdfLibQueue.forEach(function(fn) { fn(new Error('pdf-lib failed to load')); });
      pdfLibQueue = [];
    };
    document.head.appendChild(s);
  }

  // ── Imposition inverse map ───────────────────────────────────────────────────
  // Given numSpreads (must be even), returns an array of length N = numSpreads×2
  // where map[p] = { spreadIdx, side }  (side: 0 = left, 1 = right)
  function buildPageMap(numSpreads) {
    var N = numSpreads * 2;
    var numSheets = N / 4;
    var forward = {};
    for (var s = 0; s < numSheets; s++) {
      var spFront = s * 2;
      var spBack  = s * 2 + 1;
      forward[spFront + ',0'] = N - 2*s - 1;  // front-left  → reading page
      forward[spFront + ',1'] = 2*s;           // front-right → reading page
      forward[spBack  + ',0'] = 2*s + 1;       // back-left   → reading page
      forward[spBack  + ',1'] = N - 2*s - 2;   // back-right  → reading page
    }
    // Invert: reading page → (spreadIdx, side)
    var map = new Array(N);
    Object.keys(forward).forEach(function(key) {
      var parts = key.split(',');
      var sp    = parseInt(parts[0], 10);
      var side  = parseInt(parts[1], 10);
      var p     = forward[key];
      map[p] = { spreadIdx: sp, side: side };
    });
    return map;
  }

  // ── Core de-imposition ───────────────────────────────────────────────────────
  async function deimpose(arrayBuffer) {
    var PDFDocument = window.PDFLib.PDFDocument;

    var srcDoc = await PDFDocument.load(arrayBuffer);
    var numSpreads = srcDoc.getPageCount();

    if (numSpreads % 2 !== 0) {
      throw new Error(
        'This PDF has ' + numSpreads + ' page(s). ' +
        'An imposed zine must have an even number of spreads ' +
        '(original page count must be a multiple of 4). ' +
        'Are you sure this is an imposed zine?'
      );
    }

    var pageMap = buildPageMap(numSpreads);
    var N = pageMap.length;

    // Get dimensions from the first spread
    var firstSpread = srcDoc.getPage(0);
    var spreadW = firstSpread.getWidth();
    var spreadH = firstSpread.getHeight();
    var halfW   = spreadW / 2;

    var outDoc = await PDFDocument.create();

    // Embed all spreads up front — one embedPdf call per spread
    // pdf-lib's embedPdf is most efficient when called once per source doc
    // with an array of page indices.
    var allIndices = Array.from({ length: numSpreads }, function(_, i) { return i; });
    var embeddedSpreads = await outDoc.embedPdf(srcDoc, allIndices);

    // For each reading page, add a portrait page and draw the correct half
    for (var p = 0; p < N; p++) {
      var entry = pageMap[p];
      var embed = embeddedSpreads[entry.spreadIdx];
      var page  = outDoc.addPage([halfW, spreadH]);

      // Drawing the spread at an x offset clips it to the page's MediaBox.
      // Left half:  draw at x=0      → shows left  half
      // Right half: draw at x=-halfW → shows right half
      var xDraw = entry.side === 0 ? 0 : -halfW;
      page.drawPage(embed, {
        x: xDraw,
        y: 0,
        width:  spreadW,
        height: spreadH,
      });
    }

    return outDoc.save();
  }

  // ── Download helper ──────────────────────────────────────────────────────────
  function triggerDownload(bytes, filename) {
    var blob = new Blob([bytes], { type: 'application/pdf' });
    var url  = URL.createObjectURL(blob);
    var a    = document.createElement('a');
    a.href     = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    // Clean up after a short delay to allow the download to start
    setTimeout(function() {
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }, 5000);
  }

  // ── Visual feedback ──────────────────────────────────────────────────────────
  // Minimally unobtrusive: swap the link text while working, restore on done.
  // Sites can override entirely with onStart/onComplete/onError callbacks.
  function setLinkState(anchor, state) {
    if (!anchor._zineOrigText) {
      anchor._zineOrigText  = anchor.innerHTML;
      anchor._zineOrigTitle = anchor.title;
    }
    if (state === 'loading') {
      anchor.innerHTML = anchor._zineOrigText + ' <span style="opacity:0.5;font-size:0.85em">(preparing…)</span>';
      anchor.title = 'De-imposing PDF, please wait…';
      anchor.style.pointerEvents = 'none';
    } else {
      anchor.innerHTML = anchor._zineOrigText;
      anchor.title = anchor._zineOrigTitle;
      anchor.style.pointerEvents = '';
    }
  }

  // ── Filename helper ──────────────────────────────────────────────────────────
  function outputFilename(originalHref) {
    var base = originalHref.split('/').pop().split('?')[0];
    return base.replace(/\.pdf$/i, cfg.filenameSuffix + '.pdf');
  }

  // ── Main handler ─────────────────────────────────────────────────────────────
  function handleClick(e) {
    var anchor = e.target.closest('a');
    if (!anchor || !anchor.href) return;

    // Opt-out
    if (anchor.dataset.zineDeimp === 'off') return;

    // Opt-in or selector match
    var explicit = 'zineDeimp' in anchor.dataset && anchor.dataset.zineDeimp !== 'off';
    if (!explicit) {
      if (!anchor.matches(cfg.selector)) return;
      if (cfg.sameOriginOnly) {
        try {
          if (new URL(anchor.href, location.href).origin !== location.origin) return;
        } catch(_) { return; }
      }
    }

    e.preventDefault();

    var url      = anchor.href;
    var filename = outputFilename(url);

    cfg.onStart(anchor);
    setLinkState(anchor, 'loading');

    loadPdfLib(function(loadErr) {
      if (loadErr) {
        setLinkState(anchor, 'done');
        cfg.onError(anchor, loadErr);
        console.error('[zine-deimp]', loadErr);
        // Fall back to normal navigation
        window.location.href = url;
        return;
      }

      fetch(url)
        .then(function(res) {
          if (!res.ok) throw new Error('HTTP ' + res.status + ' fetching ' + url);
          return res.arrayBuffer();
        })
        .then(function(buf) {
          return deimpose(buf);
        })
        .then(function(outBytes) {
          triggerDownload(outBytes, filename);
          setLinkState(anchor, 'done');
          cfg.onComplete(anchor);
        })
        .catch(function(err) {
          console.error('[zine-deimp]', err);
          setLinkState(anchor, 'done');
          cfg.onError(anchor, err);
          // Fall back: open the original PDF normally
          window.open(url, '_blank');
        });
    });
  }

  // ── Init ─────────────────────────────────────────────────────────────────────
  function init() {
    document.addEventListener('click', handleClick);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
