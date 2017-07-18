(function ($, root, undefined) {
  
  $(function () {

    function mapAnimate() {

        var tl = new TimelineMax({repeat:-1})

        $(".greenDot").each(function(index, element){
          var child = new TimelineLite();
          child.to(element, .3, {scale:2.4, transformOrigin:"50% 50%", opacity:1})
               .to(element, .3, {scale:1});
          tl.add(child);
        })
    }

    if($(".global-map").length) {
      mapAnimate();
    } 

  });
  
})(jQuery, this);

    

  	