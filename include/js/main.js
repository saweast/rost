$(document).ready(function() {
  var owl = $("#owl-demo");
  owl.owlCarousel({
      itemsCustom : [
        [0, 4],
      ],
      navigation : true
  });

  var SmoothScroll = (function() {
    'use strict';
    var $root = $('html, body');
        /**
         * Smooth scroll to element
         * @param  {jQuery DOM element} $target
         * @param  {Number}             xOffset (optional)
         */
    function smoothScroll($target, xOffset) {
      var offset = xOffset || 0;
      $root.animate({
          scrollTop: $target.offset().top - offset - 30
      }, 1000);
    }
      // Add scroll to links
    $('nav.main-nav a').click(function(e) {
      e.preventDefault();
      smoothScroll($($.attr(this, 'href')));
    });
        // Public API
    return {
      to: smoothScroll
    };
  })();
});
