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



