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




(function ($, root, undefined) {
  
  $(function () {

    function serviceTileSlide() {

      
            
      var tl = new TimelineMax({delay:.3})
          greenCity = $(".green-city")
          grayCity = $(".gray-city")
          scape = $(".cityscape")

      tl.set(scape, {opacity:1, height:"auto"})
        .set(grayCity, {opacity:0})
        .from(scape, .4, {height:0, ease: Back.easeOut.config(1)}, "city")
        .to(greenCity, .6, {opacity:1}, "city")
        .to(grayCity, 1, {opacity:1}, "city+=.2")
    }
    
    if ($('main').hasClass("companies-page")) {
      serviceTileSlide();
    }

  });
  
})(jQuery, this);




(function ($, root, undefined) {
  $(function () {

  	function openContact() {
			var tl = new TimelineMax()
					leftBack = $(".leftBack")
					rightBack = $(".rightBack")
					body = $("body")
					contactPage = $('.contactPage')
					contactClose = $(".contactClose")
					contactButton = $(".mainContactButton")
					leftContent = $(".leftContent")
					rightContent = $(".rightContent")
					icon = $(".contactIcon")
					header = $('.contact-page .section-header')
					growHeight = $( window ).height()

			tl.set(contactPage, {	zIndex:9999996, immediateRender:false})
				.set(rightBack, {height:growHeight, y:-growHeight, immediateRender:false})
				.set(icon, {scale:0, immediateRender:false})
				.set(header, {opacity:0, scale:0, immediateRender:false})
	  		.set(leftBack, {height:growHeight, y:growHeight, immediateRender:false})
	  		.to(leftBack, .2, {y:0}, "openUp")
	  		.to(rightBack, .2, {y:0,  onComplete: lockBody}, "openUp")	
	  		.to(leftContent, .25, {y:0, opacity:1}, "openUp+=.25")
	  		.to(rightContent, .25, {y:0, opacity:1}, "openUp+=.25")
	  		.to(icon, .2, {scale:1}, "openUp+=.35")	
	  		.to(contactButton, .2, {y:0, opacity:1}, "openUp+=.35")
	  		.to(header, .2, {opacity:1, scale:1}, "openUp+=.4")
	  		.to(contactClose, .2, {y:0, opacity:1, rotation:720}, "openUp+=.3")
		}

  	function lockBody() {	
  		var tl = new TimelineMax()	  			
			tl.set($(".leftBack"), {height:"100%", immediateRender:false})
				.set($(".rightBack"), {height:"100%", immediateRender:false})
				.set(contactPage, {background:"#139170", immediateRender:false})
			body.addClass('contactOpen');
		}
	  
	  function closeContact() {
	  	var tl = new TimelineMax()
  				leftBack = $(".leftBack")
					rightBack = $(".rightBack")
					body = $("body")
					contactPage = $('.contactPage')
					contactButton = $(".mainContactButton")
					contactClose = $(".contactClose")
					leftContent = $(".leftContent")
					rightContent = $(".rightContent")
					icon = $(".contactIcon")
					header = $('.contact-page .section-header')

  		tl.set(contactPage, {background:"none", immediateRender:false})
  			.to(leftBack, .2, {height:'0'}, "openUp")
	  		.to(rightBack, .2, {height:'0',  onComplete: unlockBody}, "openUp")
	  		.to(header, .3, {opacity:0, scale:0}, "openUp-=.15")
	  		.to(leftContent, .2, {y:200, opacity:0}, "openUp-=.1")
	  		.to(rightContent, .2, {y:-200, opacity:0}, "openUp-=.1")
	  		.to(icon, .3, {scale:0}, "openUp-=.1")	
	  		.to(contactButton, .3, {y:-30, opacity:0}, "openUp-=.1")
	  		.to(contactClose, .3, {y:-200, opacity:0, rotation:0}, "openUp")
		}

  	function unlockBody() {	
  		var tl = new TimelineMax()	  		
			tl.set(contactPage, {	zIndex:-1, immediateRender:false})
			body.removeClass('contactOpen');
		}

	 	$(".contactButton").on('click', function( event ) {
  			
  			event.preventDefault();
			  
			  if ($('body').hasClass('contactOpen')) {
		   		return false;
				}
				else {
				   openContact();
				}
		});

		$(".contactClose").on('click', function( event ) {
  			
			  if ($('body').hasClass('contactOpen')) {
		   		closeContact();
				}
				else {
				   return false;
				}
		});

	});
})(jQuery, this);




(function ($, root, undefined) {
  $(function () {

    if (!$("main").hasClass("companies-page")) {

      mapboxgl.accessToken = 'pk.eyJ1IjoibWVhcnNobmMiLCJhIjoiOWFmNWVkOTFlMWYzODgzYzBhYzE5ZmRkNDYxOTQ0NzEifQ.gnqy2mlXcQ4Qo-hH8LrTLg';
      var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mearshnc/cj1qi6h2q00262rmrethvyazf?optimize=true', //hosted style id
        center: [-87.6323553,41.8961909, ], // starting position
        zoom: 10, // starting zoom
        pitch: 180
      });



      function rotator(){
        map.easeTo({bearing:70, duration:12000, pitch:75, zoom:17});
        window.setTimeout(function(){
          // map.easeTo({bearing:180, duration:8000, pitch:0, zoom:13});
          // window.setTimeout(function(){
          //   map.easeTo({bearing:220, duration:7000, pitch:70, zoom:13});
          //   window.setTimeout(function(){
              rotator()
          //   }, 8000)
          // }, 8000)
        }, 7000)
      }

      map.on('load', function(){
        rotator()
      })
    }
	
  });
})(jQuery, this);


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

    

  	
// (function ($, root, undefined) {
  
//   $(function () {

//   	$('.momentumWrapper').momentum({
//   		offset:'middle',
// 			barColor: '#9e9e9e',
// 			thickness: 4,
// 			progressColor: '#139170',
// 			fadeInOut: false
// 		});
// 	});
// })(jQuery, this);




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




(function ($, root, undefined) {
  $(function () {
    
    function serviceOne() {

      var tl = new TimelineMax({delay: 1, repeat: -1, repeatDelay:1})
          mySplitText1 = new SplitText(".txtOne", {type: "words,chars", charsClass: "charOne"})
          mySplitText2 = new SplitText(".txtTwo", {type: "words,chars", charsClass: "charTwo"})
          mySplitText3 = new SplitText(".txtThree", {type: "words,chars", charsClass: "charThree"})
          mySplitText4 = new SplitText(".txtFour", {type: "words,chars", charsClass: "charFour"})
          $chars1 = $(".charOne")
          $chars2 = $(".charTwo")
          $chars3 = $(".charThree")
          $chars4 = $(".charFour")
        
      tl.staggerTo($chars1, .3, {opacity:1}, .15)
        .to($chars1, .3, {opacity:0, y:20}, "+=.7")
        .staggerTo($chars2, .3, {opacity:1}, .15)
        .to($chars2, .3, {opacity:0, y:20}, "+=.7")
        .staggerTo($chars3, .3, {opacity:1}, .15)
        .to($chars3, .3, {opacity:0, y:20}, "+=.7")
        .staggerTo($chars4, .3, {opacity:1}, .15)
        .to($chars4, .3, {opacity:0, y:20}, "+=.7")
    }

    if($("main").hasClass("home-page")) {
      serviceOne();  
    } 
    
  });
})(jQuery, this);


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




(function ($, root, undefined) {
  
  $(function () {

    
    $(".service-tile").on({
        mouseenter: function () {

            var tl = new TimelineMax()
                border = $(this).find("rect")
                buttonArrow = $(this).find('.button-guts img')
                guts = $(this).find('.button-guts')
                uniEaseIn = Circ.EaseIn
                uniEaseOut = Circ.EaseOut

            tl.set(border, {drawSVG:"50% 50%", opacity:1})
              .to(border,.5, {fillOpacity:"1", ease:uniEaseIn}, "bordersIn")
              .to(border, .5, {drawSVG:"0% 100%", ease:uniEaseIn}, "bordersIn")
              .to(buttonArrow, .3, {x:3, ease:uniEaseIn}, "bordersIn")
              .to(guts, .5, {background:"#0E775C", ease:uniEaseIn}, "bordersIn")
              
        },
        mouseleave: function () {
            
            var tl = new TimelineMax()
                border = $(this).find("rect")
                guts = $(this).find('.button-guts')
                buttonArrow = $(this).find('.button-guts img')
                uniEaseIn = Circ.EaseIn
                uniEaseOut = Circ.EaseOut

            tl.to(border,.5, {fillOpacity:"0", ease:uniEaseIn}, "bordersOut")
            .to(border, .5, {drawSVG:"50% 50%", opacity:0, ease:uniEaseIn}, "bordersOut")
            .to(buttonArrow, .3, {x:0, ease:uniEaseIn}, "bordersOut")
            .to(guts, .5, {background:"#139170", ease:uniEaseIn}, "bordersOut")
        }
    });
        


  });
  
})(jQuery, this);




(function ($, root, undefined) {
  
  $(function () {
    
    function gridHoverLoad() {

      $('.grid-item').on({

          mouseenter: function () {

              var tl = new TimelineMax()
                  itemInner =  $(this).find('.inner')
                  itemImg =  $(this).find('.propertyImage')
                  headline =  $(this).find('.property-headline')
                  propsqft =  $(this).find('.property-sqft')
                  proptype =  $(this).find('.property-type')
                  proplocation =  $(this).find('.property-location')
                  propBorders =  $(this).find('.property-borders')
                  allText = [propsqft, proptype, proplocation]

              tl.to(itemInner, .4, {opacity:1}, "gridOut")
                .to(headline, .4, {y:0}, "gridOut")
                .to(allText, .4, {y:0}, "gridOut")
                .to(itemImg, .5, {scale:1.1}, "gridOut")
                .to(propBorders, .4, {width:"84%"}, "gridOut")
                
          },
          mouseleave: function () {
              
              var tl = new TimelineMax()
                  itemInner =  $(this).find('.inner')
                  headline =  $(this).find('.property-headline')
                  itemImg =  $(this).find('.propertyImage')
                  propsqft =  $(this).find('.property-sqft')
                  proptype =  $(this).find('.property-type')
                  proplocation =  $(this).find('.property-location')
                  allText = [propsqft, proptype, proplocation]
                  propBorders =  $(this).find('.property-borders')
              
              tl.to(itemInner, .4, {opacity:0}, "gridIn")
                .to(headline, .4, {y:20}, "gridIn")
                .to(allText, .4, {y:-20}, "gridIn")
                .to(itemImg, .5, {scale:1}, "gridIn")
                .to(propBorders, .4, {width:"0%"}, "gridIn")
          }
      });
    }

    function propertyGridIntro() {

      // var controller = new ScrollMagic.Controller()
      var tl = new TimelineMax()
          gridItem = $(".gridItem")          
          grid = $(".grid")          
          uniEaseIn = Back.easeOut.config(1)
          uniEaseOut = Back.easeOut.config(2)

      tl.set(gridItem, {scale:0, immediateRender:false})
        .set(grid, {opacity:1, immediateRender:false})
        .staggerTo(gridItem, .3, {scale:1, opacity:1, ease:Power1.EaseOut}, .1)

      // var property_move = new ScrollMagic.Scene({
      //   triggerElement: '.propertyTrigger',
      //   triggerHook: 'onEnter', 
      //   offset: 500,
      //   reverse: false
      // })
      // .addTo(controller)

      // // Add Animations to the Scroll Trigger
      // .setTween(tl);
    }

    var $grid = $('.grid').imagesLoaded( function() {
    // init Masonry after all images have loaded
      $grid.isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });
      gridHoverLoad();
    });

    // TRIGGER GRID imagesLoaded
    if($(".grid").length) {

      var waypoint = new Waypoint({
        element: $('.propertyTrigger'),
        handler: function() {
          // console.log("oh yeah")
          propertyGridIntro();
          this.destroy()
        },
        offset: '50%',
      })
    }


  	$('.office-button').on('click', function() {
  		var tl = new TimelineMax()

  		$grid.isotope({ filter: '.office' });
      $('.property-buttons li').removeClass('active')
      $(this).addClass('active')
  		      tl.to($(this), .1, {color:"#139170"},"rButtonClick")
        .to(bottom, .1, {background:"#139170", width:"100%"},"rButtonClick")
        .to($('.all-button'), .1, {color:"#6d6e71"},"rButtonClick")
        .to($('.all-button .property-bottom'), .3, {width:"1%"}, 'rButtonClick')
        .to($('.retail-button'), .1, {color:"#6d6e71"},"rButtonClick")
        .to($('.retail-button .property-bottom'), .3, {width:"1%"}, 'rButtonClick')
        .to($('.other-button'), .1, {color:"#6d6e71"},"rButtonClick")
        .to($('.other-button .property-bottom'), .3, {width:"1%"}, 'rButtonClick')
        .to($('.all-button .property-bottom'), .01, {background:"white"}, "end")
        .to($('.retail-button .property-bottom'), .01, {background:"white"}, "end")
        .to($('.other-button .property-bottom'), .01, {background:"white"}, "end")
  	});

  	$('.retail-button').on('click', function() {
  		var tl = new TimelineMax()

  		$grid.isotope({ filter: '.retail' });	
      $('.property-buttons li').removeClass('active')
      $(this).addClass('active')
      tl.to($(this), .1, {color:"#139170"},"rButtonClick")
        .to(bottom, .1, {background:"#139170", width:"100%"},"rButtonClick")
        .to($('.office-button'), .1, {color:"#6d6e71"},"rButtonClick")
        .to($('.office-button .property-bottom'), .3, {width:"1%"}, 'rButtonClick')
        .to($('.all-button'), .1, {color:"#6d6e71"},"rButtonClick")
        .to($('.all-button .property-bottom'), .3, {width:"1%"}, 'rButtonClick')
        .to($('.other-button'), .1, {color:"#6d6e71"},"rButtonClick")
        .to($('.other-button .property-bottom'), .3, {width:"1%"}, 'rButtonClick')
        .to($('.office-button .property-bottom'), .01, {background:"white"}, "end")
        .to($('.all-button .property-bottom'), .01, {background:"white"}, "end")
        .to($('.other-button .property-bottom'), .01, {background:"white"}, "end")
  	});


  	$('.all-button').on('click', function() {
  		var tl = new TimelineMax()
          bottom = $(this).find('.property-bottom')

  		$grid.isotope({ filter: '*' });
      $('.property-buttons li').removeClass('active')
      $(this).addClass('active')
  		tl.to($(this), .1, {color:"#139170"},"rButtonClick")
        .to(bottom, .1, {background:"#139170", width:"100%"},"rButtonClick")
  		  .to($('.office-button'), .1, {color:"#6d6e71"},"rButtonClick")
        .to($('.office-button .property-bottom'), .3, {width:"1%"}, 'rButtonClick')
        .to($('.retail-button'), .1, {color:"#6d6e71"},"rButtonClick")
        .to($('.retail-button .property-bottom'), .3, {width:"1%"}, 'rButtonClick')
        .to($('.other-button'), .1, {color:"#6d6e71"},"rButtonClick")
        .to($('.other-button .property-bottom'), .3, {width:"1%"}, 'rButtonClick')
        .to($('.office-button .property-bottom'), .01, {background:"white"}, "end")
        .to($('.retail-button .property-bottom'), .01, {background:"white"}, "end")
        .to($('.other-button .property-bottom'), .01, {background:"white"}, "end")
  	});

    $('.other-button').on('click', function() {
      var tl = new TimelineMax()
          bottom = $(this).find('.property-bottom')

      $grid.isotope({ filter: '.other' });
      $('.property-buttons li').removeClass('active')
      $(this).addClass('active')
      tl.to($(this), .1, {color:"#139170"},"rButtonClick")
        .to(bottom, .1, {background:"#139170", width:"100%"},"rButtonClick")
        .to($('.office-button'), .1, {color:"#6d6e71"},"rButtonClick")
        .to($('.office-button .property-bottom'), .3, {width:"1%"}, 'rButtonClick')
        .to($('.retail-button'), .1, {color:"#6d6e71"},"rButtonClick")
        .to($('.retail-button .property-bottom'), .3, {width:"1%"}, 'rButtonClick')
        .to($('.all-button'), .1, {color:"#6d6e71"},"rButtonClick")
        .to($('.all-button .property-bottom'), .3, {width:"1%"}, 'rButtonClick')
        .to($('.office-button .property-bottom'), .01, {background:"white"}, "end")
        .to($('.retail-button .property-bottom'), .01, {background:"white"}, "end")
        .to($('.all-button .property-bottom'), .01, {background:"white"}, "end")
    });



    // FOR MANAGEMENT
    $('.all-managed-button').on('click', function() {
      var tl = new TimelineMax()
          bottom = $(this).find('.property-bottom')

      $grid.isotope({ filter: '*' });
      $('.property-buttons li').removeClass('active')
      $(this).addClass('active')
      tl.to($(this), .1, {color:"#139170"},"rButtonClick")
        .to(bottom, .1, {background:"#139170", width:"100%"},"rButtonClick")
        .to($('.leased-button'), .1, {color:"#6d6e71"},"rButtonClick")
        .to($('.leased-button .property-bottom'), .3, {width:"1%"}, 'rButtonClick')
        .to($('.available-button'), .1, {color:"#6d6e71"},"rButtonClick")
        .to($('.available-button .property-bottom'), .3, {width:"1%"}, 'rButtonClick')
        .to($('.leased-button .property-bottom'), .01, {background:"white"}, "end")
        .to($('.available-button .property-bottom'), .01, {background:"white"}, "end")
    });

    $('.available-button').on('click', function() {
      var tl = new TimelineMax()
          bottom = $(this).find('.property-bottom')

      $grid.isotope({ filter: '.available' });
      $('.property-buttons li').removeClass('active')
      $(this).addClass('active')
      tl.to($(this), .1, {color:"#139170"},"rButtonClick")
        .to(bottom, .1, {background:"#139170", width:"100%"},"rButtonClick")
        .to($('.leased-button'), .1, {color:"#6d6e71"},"rButtonClick")
        .to($('.leased-button .property-bottom'), .3, {width:"1%"}, 'rButtonClick')
        .to($('.all-managed-button'), .1, {color:"#6d6e71"},"rButtonClick")
        .to($('.all-managed-button .property-bottom'), .3, {width:"1%"}, 'rButtonClick')
        .to($('.leased-button .property-bottom'), .01, {background:"white"}, "end")
        .to($('.all-managed-button .property-bottom'), .01, {background:"white"}, "end")
    });

    $('.leased-button').on('click', function() {
      var tl = new TimelineMax()
          bottom = $(this).find('.property-bottom')

      $grid.isotope({ filter: '.leased' });
      $('.property-buttons li').removeClass('active')
      $(this).addClass('active')
      tl.to($(this), .1, {color:"#139170"},"rButtonClick")
        .to(bottom, .1, {background:"#139170", width:"100%"},"rButtonClick")
        .to($('.available-button'), .1, {color:"#6d6e71"},"rButtonClick")
        .to($('.available-button .property-bottom'), .3, {width:"1%"}, 'rButtonClick')
        .to($('.all-managed-button'), .1, {color:"#6d6e71"},"rButtonClick")
        .to($('.all-managed-button .property-bottom'), .3, {width:"1%"}, 'rButtonClick')
        .to($('.available-button .property-bottom'), .01, {background:"white"}, "end")
        .to($('.all-managed-button .property-bottom'), .01, {background:"white"}, "end")
    });

    $('.property-buttons li').on({

        mouseenter: function () {

            var tl = new TimelineMax()
                bottom = $(this).find('.property-bottom')
                
            tl.to(bottom, .3, {background:"#414042", width: "100%"}, "ColorIt")
              .to($(this), .3, {color:"#414042"}, "ColorIt")

              
        },
        mouseleave: function () {
            
            var tl = new TimelineMax()
                bottom = $(this).find('.property-bottom')

            if ($(this).hasClass('active')) {
              tl.to(bottom, .3, {background:"#139170", width: "100%"}, 'ColorIt')
                .to($(this), .3, {color:"#139170"}, 'ColorIt')
            } else {
              tl.to(bottom, .3, {width:"1%"}, 'ColorIt')
                .to($(this), .3, {color:"#a2a2a5"}, 'ColorIt')
                .to(bottom, .01, {background:"white"});
            }
        }
    });


		

	 });
  
})(jQuery, this);

(function ($, root, undefined) {
	
	$(function () {

		$('.logo-container').imagesLoaded(function () {
    	
		  $('.imageCarousel').slick({
		    slidesToShow: 4,
			  slidesToScroll: 1,
			  autoplay: true,
			  infinite: true,
			  dots: false, 
			  arrows: false, 
			  autoplaySpeed: 1300, 
			  pauseOnHover:false,
			  cssEase: 'linear',

			  responsive: [    
			    {
			      breakpoint: 767,
			      settings: {
			        slidesToShow: 2
			      }
			    }
	  		]
			});
		});
	});
	
})(jQuery, this);


(function ($, root, undefined) {
	
	$(function () {
			
		$(".mobileToggle").on("click", function() {
	
			var tl = new TimelineMax()
					$this = $(this)
					menu = $(".navMenu")
					menuItem = $(".navMenu").find("li")
					ham1 = $(".hamTop")
					ham2 = $(".hamMid")
					ham3 = $(".hamBot")
					theBody = $(".wrapper")
					theMain = $("main")
					black = '#171717'
					uniTime = .3
					uniTime2 = .15


			if($this.hasClass('openMenu')) {
				tl.set(theBody, {height:"auto",overflow:"visible"})
					.set(theMain, {opacity:1})
					.to(menu, uniTime2, {width:0, left:"100%", onComplete:removeOpenClass}, "menuClose+=.3")
					.staggerTo(menuItem, uniTime2, {opacity:0, x:100, ease: Elastic.easeIn.config(1, .75)}, .04, "menuClose")
					.to(ham1, uniTime2, {width:"100%", rotation:0, y:0}, .1, "menuClose")
					.to(ham2, uniTime2, {width:"100%", x:0}, "menuClose")
					.to(ham3, uniTime2, {width:"100%", rotation:0, y:0}, "menuClose")
					.to($this, uniTime, {rotation:0}, "menuClose")
					
					

			} else {
				tl.set(theBody, {height:"100%", overflow:"hidden"})
					.to(menu, uniTime2, {width:"100%", left:"0%",onComplete:addOpenClass}, "menuOpen")
					.staggerTo(menuItem, uniTime, {opacity:1, x:0, ease: Elastic.easeOut.config(1, .75)}, .05, "menuOpen+=.1")
					.to(ham1, uniTime2, {rotation:-227, y:4, width:"50%"}, "menuOpen")
					.to(ham2, uniTime2, {width:"70%", x:5}, "menuOpen")
					.to(ham3, uniTime2, {rotation:227, y:-4, width:"50%"}, "menuOpen")
					.to($this, uniTime, {rotation:540}, "menuOpen")
					.to(theMain, .0001, {opacity:0})
			}

			

			function addOpenClass() {
				$this.addClass('openMenu');
			}

			function removeOpenClass() {
				$this.removeClass('openMenu');
			}

		})
			
		
	});
	
})(jQuery, this);


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

