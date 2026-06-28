var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
/**
 * autosave plugin
 *
 * Copyright (c) 2009-2016 Fil (fil@rezo.net)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/*
 * Usage: $("form").autosave({options...});
 * to use with SPIP's action/session.php
 */

(function($){
	$.fn.autosave = function(opt) {
		opt = $.extend({
			url: window.location,
			confirm: false,
			confirmstring: 'Sauvegarder ?'
		},opt);
		var save_changed = function(){
			$('form.autosavechanged')
			.each(function(){
				if (!opt.confirm || confirm(opt.confirmstring)) {
					var contenu = $(this).serialize();
					// ajoutons un timestamp
					var d=new Date();
					contenu = contenu + "&__timestamp=" + Math.round(d.getTime()/1000);
					$.post(opt.url, {
						'action': 'session',
						'var': 'autosave_' + $('input[name=autosave]', this).val(),
						'val': contenu
					});
				}
			}).removeClass('autosavechanged');
		};
		$(window).on('unload', save_changed);
		return this
			.on('keyup', function() {
				$(this).addClass('autosavechanged');
			})
			.on('change', function() {
				$(this).addClass('autosavechanged');
				save_changed();
			})
			.on('submit',function() {
				save_changed();
				/* trop agressif : exemple du submit previsu forum, ou des submit suivant/precedent d'un cvt multipage
				on sauvegarde toujours, et le serveur videra quand il faudra */
				/*$(this).removeClass('autosavechanged');*/
			});
	};
})(jQuery);


}

/*
     FILE ARCHIVED ON 13:23:40 Feb 01, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:03:58 Jun 28, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.302
  load_resource: 23.431 (2)
  PetaboxLoader3.datanode: 11.658 (2)
*/