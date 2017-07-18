(function ($, root, undefined) {
  
  $(function () {

  	$('.backToTop').on('click', function(){
  		tl = new TimelineMax();

  		tl.to(window, .6, {scrollTo:0}, "step1")
  			.to($(this), .3, {scale:.9}, "step1")
  			.to($(this), .2, {scale:1}, "-=.29")
  	});

  	function upArrowIntro() {
    	// var controller = new ScrollMagic.Controller()
      var tl = new TimelineMax()
        	button = $(".backToTop")
        	logo = $(".header-logo")
      
      
        	// trigger = $("section").first();
       if ($(".header").hasClass("management-header")) {
       	tl.to(button, .25, {opacity:1}, 'together')
	    		.to(logo, .25, {width:"20%", ease:Back.easeOut.config(.5)}, 'together')
       } else {
       	tl.to(button, .25, {opacity:1}, 'together')
	    		.to(logo, .25, {width:"15%", ease:Back.easeOut.config(.5)}, 'together')
       }
	  }

	  function upArrowOutro() {
    	// var controller = new ScrollMagic.Controller()
       var tl = new TimelineMax()
        	button = $(".backToTop")
        	logo = $(".header-logo")
        	// trigger = $("section").first();

	    if ($(".header").hasClass("management-header")) {
	    	tl.to(button, .25, {opacity:0},'together')
	    	.to(logo, .25, {width:"26%", ease:Back.easeIn.config(.5)}, 'together')
	    } else {
	    	tl.to(button, .25, {opacity:0},'together')
	    	.to(logo, .25, {width:"20%", ease:Back.easeIn.config(.5)}, 'together')
	    }

	    // var arrowIn = new ScrollMagic.Scene({
	    //   		triggerElement: trigger,
	    //   		triggerHook: 'onLeave', 
	    //   		offset: 500,
	    //   		reverse: true
	    // 		})
	    // .addTo(controller)
	    // .setTween(tl);
	  }



	  if ($(window).width() < 1026) {
   		return false;
		}
		else {
		  var waypoint = new Waypoint({
	      element: $("section").first(),
	      handler: function(direction) {
      	  if (direction === 'down') {
				    // console.log(direction)
	        	upArrowIntro()
				  }
				  else {
				  	// console.log(direction)
	        	upArrowOutro()
				  }
	      },
	      offset: "0",
	    })
		}

	});
})(jQuery, this);



