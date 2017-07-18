(function ($, root, undefined) {
  $(function () {

    function growHeadlines() {
      
      var tl = new TimelineMax()
          subHead = $(".page-hero .subHead")
          h3 = $(".page-hero h3")
          button = $(".page-hero .button")
          pageHero = $(".page-hero .content")

      tl.set([subHead, h3, button], {opacity:0, y:-20})
        .set(pageHero, {opacity:1})
        .to(subHead, .8, {y:10, opacity:1}, "wordsIn+=.1")
        .to(h3, .8, {y:10, opacity:1}, "wordsIn+=.3")
        .to(button, .8, {y:10, opacity:1, onComplete:growImages}, "wordsIn+=.4")
    }


  	function growImages() {
  		
  		var tl = new TimelineMax({repeat:-1})
  				heroImage = $(".hero-image")
  				
  		tl.to(heroImage, 20, {scale:1.2, ease: Power0.easeNone})
  			.to(heroImage, 20, {scale:1, ease: Power0.easeNone});
  	}


  	function growCallOuts() {
  		
  		var tl = new TimelineMax()
  				callOutBox = $(".video-callouts")
  				callOut = $(".video-callouts span")

  		tl.set(callOut, {opacity:0, y:30})
  			.set(callOutBox, {opacity:1})
  			.staggerTo(callOut, .4, {y:0, opacity:1, ease: Back.easeOut.config(1)}, .1)  			
  	}

		
    growHeadlines();
		
	});
})(jQuery, this);

