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

