$(document).ready(function() {
  var owl = $("#owl-demo");
  owl.owlCarousel({
      itemsCustom : [
        [0, 2],
        [450, 4],
        [600, 4],
        [700, 4],
        [1000, 4],
        [1200, 4],
        [1400, 4],
        [1600, 4]
      ],
      navigation : true
  });
});
