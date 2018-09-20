(function ($, root, undefined) {
  $(function () {

    tlSet = new TimelineMax();
    tlSet.set(".single-bio:nth-of-type(odd)",{opacity:0, x:200})
         .set(".single-bio:nth-of-type(even)",{opacity:0,x:-200})
         .set(".single-bio h3",{opacity:0, x:-30})
         .set(".single-bio h4",{opacity:0, x:-30})
         .set(".single-bio p",{opacity:0, x:-15})
         .set(".single-bio .button",{opacity:0, x:-15})

    function bioSlide(thisBio, index) {

      var tl = new TimelineMax({delay:.2})
          gEase = Back.easeInOut.config(1);

      tl.to(thisBio,0.5,{opacity:1, x:0, ease:gEase})
        .to(thisBio.find("h3"),0.3,{opacity:1, x:0, ease:gEase}, "out+=0.1")
        .to(thisBio.find("h4"),0.3,{opacity:1, x:0, ease:gEase}, "out")
        .to(thisBio.find(".grad stop:nth-child(1)"),.3,{attr:{offset:'0%'},stopColor:'rgba(19,145,112)'}, "out+=0.0")
        .to(thisBio.find(".grad stop:nth-child(2)"),.3,{attr:{offset:'0%'},stopColor:'rgba(19,145,112)'}, "out+=0.1")
        // .to(".bio-color-overlay",.6,{opacity:0}, "out+=0.3")
        .to(thisBio.find("p"),0.3,{opacity:1, x:0, ease:gEase}, "out+=.2")
        .to(thisBio.find(".button"),0.3,{opacity:1, x:0, ease:gEase}, "out+=.2")
        // .to("#grad stop:nth-child(2)",1,{attr:{offset:'100%'},stopColor:'black',stopOpacity:0.0},0)
        // .to("#grad",1,{attr:{gradientTransform:"translate(0,50)"}})
    }




    if ($('main').hasClass("team-page")) {

      $('.single-bio').each(function(){
        var thisBio = $(this);

        var waypoint = new Waypoint({
          element: $(this),
          handler: function() {
            // console.log("tile")
            bioSlide(thisBio);
            // this.destroy()
          },
          offset: "50%",
        })
      })
    }




    $(".single-bio").on({
        mouseenter: function () {
          console.log('out');

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
