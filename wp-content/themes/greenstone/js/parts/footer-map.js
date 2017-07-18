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

