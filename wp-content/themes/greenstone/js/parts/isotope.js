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
