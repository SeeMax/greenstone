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



