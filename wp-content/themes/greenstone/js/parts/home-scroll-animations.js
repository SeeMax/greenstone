(function ($, root, undefined) {
  
  $(function () {

    function serviceTileSlide() {

      $( ".service-tile:odd" ).addClass( "serviceR" );
      $( ".service-tile:even" ).addClass( "serviceL" );
            
      var tl = new TimelineMax()
          serviceL = $(".serviceL")
          serviceR = $(".serviceR")

      tl.set(serviceL, {x:-200})
        .set(serviceR, {x:200})
        .staggerTo(serviceL, .8, {x:0, opacity:1, ease: Back.easeInOut.config(1)}, .6, "moveOut")
        .staggerTo(serviceR, .8, {x:0, opacity:1, ease: Back.easeInOut.config(1)}, .6, "moveOut")
    }
    // serviceTileSlide();
    if ($('main').hasClass("home-page") || $('main').hasClass("companies-page")) {
      var waypoint = new Waypoint({
        element: $(".tileTrigger"),
        handler: function() {
          // console.log("tile")
          serviceTileSlide();
          this.destroy()
        },
        offset: "50%",
      })
    }

  });
  
})(jQuery, this);



