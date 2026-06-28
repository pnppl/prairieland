var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
'use strict';(function(){(function(){function e(a){for(var b=[];a=a.parentNode||a.host||a.defaultView;)b.push(a);return b}function f(a){return function(b){var c="undefined"!==typeof b.getAttribute?b.getAttribute("class")||"":void 0;"undefined"!==typeof c&&-1===c.indexOf(a)&&b.setAttribute("class",c.concat(" ",a).trim())}}function g(a){return function(b){var c="undefined"!==typeof b.getAttribute?b.getAttribute("class")||"":void 0;if(c){var d=c.indexOf(a);0<=d&&(0===d||0<=h.indexOf(c.charAt(d-1)))&&
(c=c.replace(a,"").trim(),""===c?b.removeAttribute("class"):b.setAttribute("class",c))}}}function k(){var a=function(b){function a(){d=!1;"blur"===b.type&&Array.prototype.slice.call(e(b.target)).forEach(g("focus-within"));"focus"===b.type&&Array.prototype.slice.call(e(b.target)).forEach(f("focus-within"))}if(!d){window.requestAnimationFrame(a);var d=!0}};document.addEventListener("focus",a,!0);document.addEventListener("blur",a,!0);f("js-focus-within")(document.body);return!0}var h=["\n","\t"," ",
"\r"];try{return"undefined"!==typeof window&&!document.querySelector(":focus-within")}catch(a){return k()}})()})()
//# sourceMappingURL=focus-within-polyfill.js.map

}

/*
     FILE ARCHIVED ON 08:59:10 Jun 24, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:59:35 Jun 28, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.426
  exclusion.robots: 0.044
  exclusion.robots.policy: 0.037
  esindex: 0.006
  cdx.remote: 5.892
  LoadShardBlock: 207.663 (6)
  PetaboxLoader3.datanode: 149.562 (8)
  PetaboxLoader3.resolve: 146.941 (4)
  load_resource: 135.401 (2)
*/