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

