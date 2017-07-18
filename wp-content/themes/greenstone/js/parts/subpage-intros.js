(function ($, root, undefined) {
  $(function () {

  	function animateBullets() {  		
  		var tl = new TimelineMax({delay:.8})
  				list = $(".bullet-list")
          bullet = list.find('li')
          headline = list.find('h5')
          uniEase = Back.easeOut.config(1.7)
  				
  		tl.set(list, {x:200, opacity:0})
        .set(bullet, {x:50, opacity:0})
        .set(headline, {y:20, opacity:0})
        .to(list, .6, {x:0, opacity:1, ease: uniEase})
        .staggerTo(bullet, .4, {x:0, opacity:1, ease: uniEase}, .1, "wordsIn -=.2")
        .to(headline, .4, {y:0, opacity:1, ease: uniEase}, "wordsIn -=.2")
  	}


    function animateBulletsTwo() {
      var tl = new TimelineMax({delay:.8})
          list = $(".bullet-list-two")
          bullet = list.find('li')
          headline = list.find('h5')
          // controller = new ScrollMagic.Controller()
                    
      tl.set(list, {x:200, opacity:0})
        .set(bullet, {x:50, opacity:0})
        .set(headline, {y:20, opacity:0})
        .to(list, .6, {x:0, opacity:1, ease: uniEase})
        .staggerTo(bullet, .4, {x:0, opacity:1, ease: uniEase}, .1, "wordsIn -=.2")
        .to(headline, .4, {y:0, opacity:1, ease: uniEase}, "wordsIn -=.2")
    }


    function trophiesIn() {
      var tl = new TimelineMax({delay:.5})
          allTrophies = $('.trophy-line')
          oneTrophy = $('.trophy-line img')
          h3 = $('.facts-tile h3')

      tl.staggerTo(oneTrophy, .3, {x:0, opacity:1,ease: Back.easeOut.config(2.4)}, .2)
        .to(h3, .3, {y:0, opacity:1}, "-=.1")
    }


    function subheadIn() {
      var tl = new TimelineMax({delay:.5})
          h3 = $('.facts-tile h3')

      tl.to(h3, .3, {y:0, opacity:1}, "-=.1")
    }


    function counterUp() {
      // console.log("count");
      var tl = new TimelineMax({delay:.5})
      tl.to($('.facts-tile'), .8, {opacity:1});

      $('.counter').counterUp({
        delay: 10,
        time: 1000
       });
    }


    if($(".bullet-list").length) {
      var waypoint = new Waypoint({
        element: $(".factsTrigger"),
        handler: function() {
          // console.log("ok1")
          animateBullets()
          this.destroy()
        },
        offset: '110%',
      })
    }

    if($(".bullet-list-two").length) {
      var waypoint = new Waypoint({
        element: $(".factsTriggerTwo"),
        handler: function() {
          // console.log("ok2")
          animateBulletsTwo()
          this.destroy()
        },
        offset: '110%',
      })
    }


    if ($('main').hasClass("home-page")) {
      counterUp();
    } else if ($('main').hasClass("leasing-page")) {
      trophiesIn();
      counterUp();
    } else {
      subheadIn();
      counterUp();
    }

	});
})(jQuery, this);

