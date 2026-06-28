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
* Placeholder label
* https://github.com/AbleTech/jquery.placeholder-label
*
* Copyright (c) 2010 Able Technology Consulting Limited
* http://www.abletech.co.nz/
*/
(function($) {
  $.placeholderLabel = {
    placeholder_class: null,
    add_placeholder: function(){
      if($(this).val() == $(this).attr('placeholder')){
        $(this).val('').removeClass($.placeholderLabel.placeholder_class);
      }
    },
    remove_placeholder: function(){
      if($(this).val() == ''){
        $(this).val($(this).attr('placeholder')).addClass($.placeholderLabel.placeholder_class);
      }
    },
    disable_placeholder_fields: function(){
      $(this).find("input[placeholder]").each(function(){
        if($(this).val() == $(this).attr('placeholder')){
          $(this).val('');
        }
      });

      return true;
    }
  };

  $.fn.placeholderLabel = function(options) {
    // detect modern browsers
    var dummy = document.createElement('input');
    if(dummy.placeholder != undefined){
      return this;
    }

    var config = {
      placeholder_class : 'placeholder'
    };

    if(options) $.extend(config, options);

    $.placeholderLabel.placeholder_class = config.placeholder_class;

    this.each(function() {
      var input = $(this);

      input.focus($.placeholderLabel.add_placeholder);
      input.blur($.placeholderLabel.remove_placeholder);

      input.triggerHandler('focus');
      input.triggerHandler('blur');

      $(this.form).submit($.placeholderLabel.disable_placeholder_fields);
    });

    return this;
  }
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
  capture_cache.get: 0.317
  load_resource: 32.518 (2)
  PetaboxLoader3.datanode: 12.571 (2)
*/