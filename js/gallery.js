(function() {

$(".lightbox").lightbox({
  thumbnails: true
});

lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
    
    
! function(d, s, id) {
  const js, fjs = d.getElementsByTagName(s)[0],
    p = /^http:/.test(d.location) ? 'http' : 'https';
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = p + '://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, 'script', 'twitter-wjs');
    