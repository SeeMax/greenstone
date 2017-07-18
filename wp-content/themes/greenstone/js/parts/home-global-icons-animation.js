(function ($, root, undefined) {
  
  $(function () {


    function globalIcons() {
      // var controller = new ScrollMagic.Controller()
      var tl = new TimelineMax()
          gTile = $(".global-tile")
          gShadow = $(".location-shadow")
          gSquare = $(".location-square")
          gIcon = $(".location-icon")
          gLabel = gTile.find("p")     
          uniEaseIn = Back.easeOut.config(1)
          uniEaseOut = Back.easeOut.config(2)

      tl.staggerTo(gSquare, .3, {x:0, opacity:1, ease:Power4.EaseOut}, .1, "iconsIn")
        .staggerTo(gIcon, .3, {y:0, opacity:1, ease: uniEaseOut}, .1, "iconsIn+=.1")
        .staggerTo(gShadow, .5, {opacity:1, ease:Power4.EaseOut}, .1, "iconsIn+=.2")
        .staggerTo(gLabel, .3, {y:0, opacity:1, ease:uniEaseOut}, .1, "iconsIn+=.2")
        .timeScale(.85)

      // var property_move = new ScrollMagic.Scene({
      //   triggerElement: '#global-trigger',
      //   triggerHook: 'onEnter', 
      //   offset: 500,
      //   reverse: false
      // })
      // .addTo(controller)

      // // Add Animations to the Scroll Trigger
      // .setTween(tl);
    }
    // globalIcons();

    if ($('main').hasClass("home-page")) {

      var waypoint = new Waypoint({
        element: $("#global-trigger"),
        handler: function() {
          // console.log("global")
          globalIcons();
          this.destroy()
        },
        offset: 'bottom-in-view',
      })
    }

    

  });
})(jQuery, this);



