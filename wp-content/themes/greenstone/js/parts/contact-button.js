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



