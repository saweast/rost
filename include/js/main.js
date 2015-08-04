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
    $('.scroll a').click(function(e) {
      e.preventDefault();
      smoothScroll($($.attr(this, 'href')));
    });
        // Public API
    return {
      to: smoothScroll
    };
  })();
  window.onscroll = function() {
    if(window.pageYOffset > 500) {
      $('div.scroll').addClass('fixed');
    }
    else $('div.scroll').removeClass('fixed');
  }
  // ********************************
  //adding animation
  // ********************************

   var why = document.getElementById('why');
  var whyY = why.getBoundingClientRect().top + window.pageYOffset - 500;
  window.onscroll = function() {
    if (window.pageYOffset > whyY) {
      $('#why .wrap-h1').removeClass('anim');
    };
  }


  setTimeout(function(){
    $(".abs-header-cnt").removeClass('hidden');
    $(".fb").removeClass('hidden');
    $('.logo img').removeClass('hidden');
    $('.nayword-block').removeClass('hidden');
  }, 200);
  setTimeout(function(){
    $('.servises .wrap-h1').removeClass('hidden');
    $('.triangles').removeClass('hidden');
    $('.servises-items').removeClass('hidden');
  }, 500);
  var sv =  document.getElementById('servises');
  if (sv.getBoundingClientRect().top < window.pageYOffset) {
//    alert(window.pageYOffset);
  }

});
