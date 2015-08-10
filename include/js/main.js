$(document).ready(function() {
  var owl = $("#owl-demo");
  owl.owlCarousel({
      itemsCustom : [
        [0, 4],
      ],
      navigation : true,
      autoPlay: 1500
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

  var tv = document.getElementById('tv');
  var tvY = tv.getBoundingClientRect().top + window.pageYOffset + 200;

  var radio = document.getElementById('radio');
  var radioY = radio.getBoundingClientRect().top + window.pageYOffset + 200;

  var internet = document.getElementById('internet');
  var internetY = internet.getBoundingClientRect().top + window.pageYOffset + 200;

  var clients = document.getElementById('clients');
  var clientsY = clients.getBoundingClientRect().top + window.pageYOffset + 200;

  window.onscroll = function() {
    if (window.pageYOffset > whyY) {
      $('#why .wrap-h1').removeClass('anim');
      setTimeout(function(){$('#why .guarantees').removeClass('hidden');}, 300)
    };
    if (window.pageYOffset > tvY) {
      $('#tv').removeClass('hidden');
    }
    if (window.pageYOffset > radioY) {
      $('#radio').removeClass('hidden');
    }
    if (window.pageYOffset > internetY) {
      $('#internet').removeClass('hidden');
    }
    if (window.pageYOffset > clientsY) {
      $('#clients').removeClass('hidden');
    }
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
  }, 200);
  var sv =  document.getElementById('servises');
  if (sv.getBoundingClientRect().top < window.pageYOffset) {
//    alert(window.pageYOffset);
  }

});
