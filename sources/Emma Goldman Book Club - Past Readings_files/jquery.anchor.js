$.fn.resizeToParentWidth = function (selector) {
  var aspectRatio = this.attr("height") / this.attr("width");
  var wrapWidth = this.parent(selector).width();
  var newHeight = Math.floor(wrapWidth * aspectRatio);
  this.height(newHeight);
  this.width(wrapWidth);
  
  var heightDiff = 20 - ((newHeight)%20);
  this.parents(".video").children("a").css("marginTop", heightDiff);
  this.parents(".video").children("a").height(220 - (newHeight + heightDiff));
  
  return this;
}

$(document).ready(function(){

  $("#main .video object, #main .video embed").not("#main .video .html_photoset embed").resizeToParentWidth(".post-content");

  if (feature_tag.length) {

    $.getJSON("http://" + feature_domain + "/api/read/json?tagged=" + feature_tag + "&num=5&callback=?&filter=text",
    function(data) {
        
      if (data.posts.length) {
    
        $.each(data.posts, function(i,posts){
        
          var post_url = this["url"];
        
          if (this["type"] == "regular") {
            var post_title = this["regular-title"];
            var post_body = this["regular-body"];
            var content = '<div class="header-features-feature text">\
                            <a href="' + post_url + '">\
                              <strong>' + post_title + '</strong>\
                              <span>' + post_body + '</span>\
                            </a>\
                          </div>';
          } else if (this["type"] == "video") {
            
            if (this['video-player'].indexOf("youtube") >= 0) {
              var post_img = this['video-player'];
              post_img = post_img.substr(post_img.indexOf('http://www.youtube.com/v/') + 25);
              post_img = post_img.substr(0, post_img.indexOf('&'));
              post_img = "http://img.youtube.com/vi/" + post_img + "/hqdefault.jpg";
            }
            
            //if this video is from vimeo then pull a thumbnail
            
            var post_body = this["video-caption"];
            var post_player = this["video-player"];
            var content = '<div class="header-features-feature video">';
            if (!(post_img)) { content+= '<div class="post-content">' + post_player + '</div>'}
            content += '     <a href="' + post_url + '">';
            if (post_img) { content+= '<img src="' + post_img + '" />' }
            content += '      <span>' + post_body + '</span>\
                            </a>\
                          </div>';
            
          } else if (this["type"] == "photo") {
            var post_img_width = this["width"];
            var post_img_height = this["height"];
            var post_img_fixedheight = (post_img_height/post_img_width) * 180;
            var post_img_heightdiff = post_img_fixedheight%20;
            if (post_img_heightdiff > 10) {
              post_img_margin = 20 + 20 - post_img_heightdiff;
            } else {
              post_img_margin = 20 - post_img_heightdiff;
            }
            var post_img_url = this["photo-url-250"];
            var post_body = this["photo-caption"];
            var content = '<div class="header-features-feature photo">\
                            <a href="' + post_url + '">\
                              <img src="' + post_img_url + '" style="margin-bottom: ' + post_img_margin + 'px;" />\
                              <span>' + post_body + '</span>\
                            </a>\
                          </div>';
          } else if (this["type"] == "link") {
            var post_title = this["link-text"];
            var post_body = this["link-description"];
            var content = '<div class="header-features-feature link">\
                            <a href="' + post_url + '">\
                              <small>&gt;</small>\
                              <strong><em>' + post_title + '</em></strong>\
                              <span class="clear"></span>\
                              <span>' + post_body + '</span>\
                            </a>\
                          </div>';
          } else if (this["type"] == "answer") {
            var post_title = this["question"];
            var post_body = this["answer"];
            var content = '<div class="header-features-feature ask">\
                            <a href="' + post_url + '">\
                              <strong>' + post_title + '</strong>\
                              <span>' + post_body + '</span>\
                            </a>\
                          </div>';
          } else if (this["type"] == "audio") {
            var post_title = this["id3-title"];
            var post_artist = this["id3-artist"];
            var content = '<div class="header-features-feature audio">\
                            <a href="' + post_url + '">\
                              <strong><span>Title</span>' + post_title + '</strong>\
                              <strong><span>Artist</span>' + post_artist + '</strong>\
                            </a>\
                          </div>';
          } else if (this["type"] == "conversation") {
            var post_title = this["conversation-title"];
            var conversation_body = this["conversation"];
            var post_name1 = conversation_body[1]["label"];
            var post_phrase1 = conversation_body[1]["phrase"];
            var post_name2 = conversation_body[2]["label"];
            var post_phrase2 = conversation_body[2]["phrase"];
            var content = '<div class="header-features-feature chat">\
                            <a href="' + post_url + '">\
                              <strong>' + post_title + '</strong>\
                              <span><small>' + post_name1 + '</small>' + post_phrase1 + '</span>\
                              <span><small>' + post_name2 + '</small>' + post_phrase2 + '</span>\
                            </a>\
                          </div>';
          } else if (this["type"] == "quote") {
            var post_title = this["quote-text"];
            var post_body = this["quote-source"];
            var content = '<div class="header-features-feature quote">\
                            <a href="' + post_url + '">\
                              <strong>' + post_title + '</strong>\
                              <span>' + post_body + '</span>\
                            </a>\
                          </div>';
          }
          
          $("#header-features-inner").append(content);
        
        });
        
        $("#header-features").fadeIn();
        
        $("#header-features-inner .video object, #header-features-inner .video embed").resizeToParentWidth(".post-content");
      
      }
      
    });
  
  }
  
  $(".sharelink").click(function() {
    $(this).siblings(".sharebox").fadeToggle();
    return false;
  });
  
  $(".sharebox-url").click(function() {
    this.select();
  });
  
});