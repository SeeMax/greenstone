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

