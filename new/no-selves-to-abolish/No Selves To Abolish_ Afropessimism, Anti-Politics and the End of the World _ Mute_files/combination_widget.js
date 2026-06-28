var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");


function dsqComboTab(tab) {
	document.getElementById('dsq-combo-people').style.display = "none";
	document.getElementById('dsq-combo-popular').style.display = "none";
	document.getElementById('dsq-combo-recent').style.display = "none";
	document.getElementById('dsq-combo-tab-people').className = "dsq-combo-tab";
	document.getElementById('dsq-combo-tab-popular').className = "dsq-combo-tab";
	document.getElementById('dsq-combo-tab-recent').className = "dsq-combo-tab";

	document.getElementById('dsq-combo-' + tab).style.display = "block";
	document.getElementById('dsq-combo-tab-' + tab).className = "dsq-combo-tab dsq-active";
}

document.write(' \
<style type="text/css" media="screen">\
	 #dsq-combo-widget ul,\
	 #dsq-combo-widget li,\
	 #dsq-combo-widget ol,\
	 #dsq-combo-widget div,\
	 #dsq-combo-widget p,\
	 #dsq-combo-widget a,\
	 #dsq-combo-widget cite,\
	 #dsq-combo-widget img {\
	 border: 0;\
	 padding: 0;\
	 margin: 0;\
	 float: none;\
	 text-indent: 0;\
	 background: none;\
	 }\
	 #dsq-combo-widget ul,\
	 #dsq-combo-widget li,\
	 #dsq-combo-widget ol {\
	 list-style-type: none;\
	 list-style-image: none;\
	 background: none;\
	 display: block;\
	 }\
	 #dsq-combo-widget #dsq-combo-content ul,\
	 #dsq-combo-widget #dsq-combo-content li,\
	 #dsq-combo-widget #dsq-combo-content ol,\
	 #dsq-combo-widget #dsq-combo-content div,\
	 #dsq-combo-widget #dsq-combo-content p,\
	 #dsq-combo-widget #dsq-combo-content a,\
	 #dsq-combo-widget #dsq-combo-content cite,\
	 #dsq-combo-widget #dsq-combo-content img {\
	 border: 0;\
	 padding: 0;\
	 margin: 0;\
	 float: none;\
	 text-indent: 0;\
	 background: none;\
	 }\
	 #dsq-combo-widget #dsq-combo-content ul,\
	 #dsq-combo-widget #dsq-combo-content li,\
	 #dsq-combo-widget #dsq-combo-content ol {\
	 list-style-type: none;\
	 list-style-image: none;\
	 background: none;\
	 display: block;\
	 }\
	 .dsq-clearfix:after {\
	 content:".";\
	 display: block;\
	 height: 0;\
	 clear: both;\
	 visibility: hidden;\
	 }\
	 /* end reset */\
	 #dsq-combo-widget { ;\
	 text-align: left;\
	 }\
	 #dsq-combo-widget #dsq-combo-tabs {\
	 float: left;\
	 }\
	 #dsq-combo-widget #dsq-combo-content {\
	 position: static;\
	 }\
	 #dsq-combo-widget #dsq-combo-content h3 {\
	 float: none;\
	 text-indent: 0;\
	 background: none;\
	 padding: 0;\
	 border: 0;\
	 margin: 0 0 10px 0;\
	 font-size: 16px;\
	 }\
	 #dsq-combo-widget #dsq-combo-tabs li {\
	 display: inline;\
	 float: left;\
	 margin-right: 2px;\
	 padding: 0px 5px;\
	 text-transform: uppercase;\
	 }\
	 #dsq-combo-widget #dsq-combo-tabs li a {\
	 text-decoration: none;\
	 font-weight: bold;\
	 font-size: 10px;\
	 }\
	 #dsq-combo-widget #dsq-combo-content .dsq-combo-box {\
	 margin: 0 0 20px;\
	 padding: 12px;\
	 clear: both;\
	 }\
	 #dsq-combo-widget #dsq-combo-content .dsq-combo-box li {\
	 padding-bottom: 10px;\
	 margin-bottom: 10px;\
	 overflow: hidden;\
	 word-wrap: break-word;\
	 }\
	 #dsq-combo-widget #dsq-combo-content .dsq-combo-avatar {\
	 float: left;\
	 height: 48px;\
	 width: 48px;\
	 margin-right: 15px;\
	 }\
	 #dsq-combo-widget #dsq-combo-content .dsq-combo-box cite {\
	 font-weight: bold;\
	 font-size: 14px;\
	 }\
	 span.dsq-widget-clout {\
	 background-color:#FF7300;\
	 color:#FFFFFF;\
	 padding:0pt 2px;\
	 }\
	 #dsq-combo-logo { text-align: right; }\
	 /* Blue */\
	 #dsq-combo-widget.blue #dsq-combo-tabs li.dsq-active { background: #E1F3FC; }\
	 #dsq-combo-widget.blue #dsq-combo-content .dsq-combo-box { background: #E1F3FC; }\
	 #dsq-combo-widget.blue #dsq-combo-tabs li { background: #B5E2FD; }\
	 #dsq-combo-widget.blue #dsq-combo-content .dsq-combo-box li { border-bottom: 1px dotted #B5E2FD; }\
	 /* Grey */\
	 #dsq-combo-widget.grey #dsq-combo-tabs li.dsq-active { background: #f0f0f0; }\
	 #dsq-combo-widget.grey #dsq-combo-content .dsq-combo-box { background: #f0f0f0; }\
	 #dsq-combo-widget.grey #dsq-combo-tabs li { background: #ccc; }\
	 #dsq-combo-widget.grey #dsq-combo-content .dsq-combo-box li { border-bottom: 1px dotted #ccc; }\
	 /* Green */\
	 #dsq-combo-widget.green #dsq-combo-tabs li.dsq-active { background: #f4ffea; }\
	 #dsq-combo-widget.green #dsq-combo-content .dsq-combo-box { background: #f4ffea; }\
	 #dsq-combo-widget.green #dsq-combo-tabs li { background: #d7edce; }\
	 #dsq-combo-widget.green #dsq-combo-content .dsq-combo-box li { border-bottom: 1px dotted #d7edce; }\
	 /* Red */\
	 #dsq-combo-widget.red #dsq-combo-tabs li.dsq-active { background: #fad8d8; }\
	 #dsq-combo-widget.red #dsq-combo-content .dsq-combo-box { background: #fad8d8; }\
	 #dsq-combo-widget.red #dsq-combo-tabs li { background: #fdb5b5; }\
	 #dsq-combo-widget.red #dsq-combo-content .dsq-combo-box li { border-bottom: 1px dotted #fdb5b5; }\
	 /* Orange */\
	 #dsq-combo-widget.orange #dsq-combo-tabs li.dsq-active { background: #fae6d8; }\
	 #dsq-combo-widget.orange #dsq-combo-content .dsq-combo-box { background: #fae6d8; }\
	 #dsq-combo-widget.orange #dsq-combo-tabs li { background: #fddfb5; }\
	 #dsq-combo-widget.orange #dsq-combo-content .dsq-combo-box li { border-bottom: 1px dotted #fddfb5; }\
	 </style>\
	 <div id="dsq-combo-widget" class="grey">\
	 <ul id="dsq-combo-tabs">\
	 <li id="dsq-combo-tab-people" ><a href="#" onclick="dsqComboTab(\'people\'); return false">People</a></li>\
	 <li id="dsq-combo-tab-recent" class="dsq-active"><a href="#" onclick="dsqComboTab(\'recent\'); return false">Recent</a></li>\
	 <li id="dsq-combo-tab-popular" ><a href="#" onclick="dsqComboTab(\'popular\'); return false">Popular</a></li>\
	 </ul>\
	 <div id="dsq-combo-content">\
	 <div id="dsq-combo-people" class="dsq-combo-box" style="display:none">\
	 <h3>Top Commenters</h3>\
	 <ul>\
	 <li class="dsq-clearfix">\
	 <a href="https://web.archive.org/web/20160317020829/https://disqus.com/by/james_heartfield/">\
	 <img class="dsq-combo-avatar" src="//web.archive.org/web/20160317020829/http://a.disquscdn.com/uploads/users/5731/4278/avatar92.jpg?1371459051">\
	 </a>\
	 <cite><a href="https://web.archive.org/web/20160317020829/https://disqus.com/by/james_heartfield/">James Heartfield</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;29 posts</div>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="https://web.archive.org/web/20160317020829/https://disqus.com/by/disqus_sTcuyXbRbg/">\
	 <img class="dsq-combo-avatar" src="//web.archive.org/web/20160317020829/http://a.disquscdn.com/uploads/users/8317/5652/avatar92.jpg?1385714105">\
	 </a>\
	 <cite><a href="https://web.archive.org/web/20160317020829/https://disqus.com/by/disqus_sTcuyXbRbg/">Jason</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;11 posts</div>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="https://web.archive.org/web/20160317020829/https://disqus.com/by/justinsayings/">\
	 <img class="dsq-combo-avatar" src="//web.archive.org/web/20160317020829/http://a.disquscdn.com/uploads/users/5022/1220/avatar92.jpg?1368128008">\
	 </a>\
	 <cite><a href="https://web.archive.org/web/20160317020829/https://disqus.com/by/justinsayings/">Justin Sayings</a></cite>\
	 <div><span class="dsq-widget-clout" title="Clout: Reputation on Disqus"></span>&nbsp;&middot;&nbsp;11 posts</div>\
	 </li>\
	 </ul>\
	 <div id="dsq-combo-logo"><a href="https://web.archive.org/web/20160317020829/http://disqus.com"><img src="//web.archive.org/web/20160317020829/http://a.disquscdn.com/1457379538/images/embed/widget-logo.png"></a></div>\
	 </div>\
	 <div id="dsq-combo-recent" class="dsq-combo-box" >\
	 <h3>Recent Comments</h3>\
	 <ul>\
	 <li class="dsq-clearfix">\
	 <a href="https://web.archive.org/web/20160317020829/https://disqus.com/by/bdzgroup/"><img class="dsq-combo-avatar" src="//web.archive.org/web/20160317020829/http://a.disquscdn.com/1457379538/images/noavatar92.png"></a>\
	 <a class="dsq-widget-user" href="https://web.archive.org/web/20160317020829/https://disqus.com/by/bdzgroup/">BDZ GROUP</a>\
	 <span class="dsq-widget-comment"><p>A REPLY TO QUESTIONS FROM COMRADES REGARDING BDZ, BDS AND BICOM The ethnic cleansing of Palestinians is an integral, not accidental, part of the Israeli state. Palestinians learn through experience...</p></span>\
	 <p class="dsq-widget-meta"><a href="https://web.archive.org/web/20160317020829/http://www.metamute.org/editorial/articles/eleven-pro-tips-art-plus-internet">Eleven Pro-tips for Art plus Internet</a>&nbsp;&middot;&nbsp;<a href="https://web.archive.org/web/20160317020829/http://www.metamute.org/editorial/articles/eleven-pro-tips-art-plus-internet#comment-2545933897">2 weeks ago</a></p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="https://web.archive.org/web/20160317020829/https://disqus.com/by/bdzgroup/"><img class="dsq-combo-avatar" src="//web.archive.org/web/20160317020829/http://a.disquscdn.com/1457379538/images/noavatar92.png"></a>\
	 <a class="dsq-widget-user" href="https://web.archive.org/web/20160317020829/https://disqus.com/by/bdzgroup/">BDZ GROUP</a>\
	 <span class="dsq-widget-comment"><p>§ PRO-TIP 12: BOYCOTT ZABLUDOWICZ! BLOCKADE THE ELECTRONIC SUPERHIGHWAY! Let’s start with a few facts not mentioned in the reviews. The Electronic Superhighway Show includes artworks sourced from...</p></span>\
	 <p class="dsq-widget-meta"><a href="https://web.archive.org/web/20160317020829/http://www.metamute.org/editorial/articles/eleven-pro-tips-art-plus-internet">Eleven Pro-tips for Art plus Internet</a>&nbsp;&middot;&nbsp;<a href="https://web.archive.org/web/20160317020829/http://www.metamute.org/editorial/articles/eleven-pro-tips-art-plus-internet#comment-2539979852">2 weeks ago</a></p>\
	 </li>\
	 <li class="dsq-clearfix">\
	 <a href="https://web.archive.org/web/20160317020829/https://disqus.com/by/katielips/"><img class="dsq-combo-avatar" src="//web.archive.org/web/20160317020829/http://a.disquscdn.com/uploads/users/3410/4596/avatar92.jpg?1379416537"></a>\
	 <a class="dsq-widget-user" href="https://web.archive.org/web/20160317020829/https://disqus.com/by/katielips/">katielips</a>\
	 <span class="dsq-widget-comment"><p>Brilliant post, Matthew. (I haven\'t actually seen it so I\'m saying that because I trust you!) Whilst I always thought it had an "Oops, we\'re late to the Digital / Net / Post Internet Art party - we...</p></span>\
	 <p class="dsq-widget-meta"><a href="https://web.archive.org/web/20160317020829/http://www.metamute.org/editorial/articles/eleven-pro-tips-art-plus-internet">Eleven Pro-tips for Art plus Internet</a>&nbsp;&middot;&nbsp;<a href="https://web.archive.org/web/20160317020829/http://www.metamute.org/editorial/articles/eleven-pro-tips-art-plus-internet#comment-2531281104">3 weeks ago</a></p>\
	 </li>\
	 </ul>\
	 <div id="dsq-combo-logo"><a href="https://web.archive.org/web/20160317020829/http://disqus.com"><img src="//web.archive.org/web/20160317020829/http://a.disquscdn.com/1457379538/images/embed/widget-logo.png"></a></div>\
	 </div>\
	 <div id="dsq-combo-popular" class="dsq-combo-box" style="display:none">\
	 <h3>Most Discussed</h3>\
	 <ul>\
	 <li class="dsq-clearfix">\
	 <a class="dsq-widget-thread" href="https://web.archive.org/web/20160317020829/http://www.metamute.org/editorial/articles/eleven-pro-tips-art-plus-internet">Eleven Pro-tips for Art plus Internet</a>\
	 <p class="dsq-widget-meta">6 comments &middot; 2 weeks ago</p>\
	 </li>\
	 </ul>\
	 <div id="dsq-combo-logo"><a href="https://web.archive.org/web/20160317020829/http://disqus.com"><img src="//web.archive.org/web/20160317020829/http://a.disquscdn.com/1457379538/images/embed/widget-logo.png"></a></div>\
	 </div>\
	 </div>\
	 </div>\
');

}

/*
     FILE ARCHIVED ON 02:08:29 Mar 17, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:33:01 Jun 28, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 4.6
  load_resource: 116.4
  PetaboxLoader3.resolve: 73.315
  PetaboxLoader3.datanode: 33.502
*/