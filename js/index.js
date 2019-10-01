
// ****** INDEX ******

$(document).ready(function(){
  $('.quiz-button').hide();
  $('.curl.one').animate({top: 0}, 4000, function(){
    $('.quiz-button').show();
  });
  $('.curl.two').animate({top: 0}, 2000);
  $('.curl.three').animate({top: 0}, 1000);
  $('.curl.four').animate({top: 0}, 500);
});

// ****** STICKY NAV ******

$(document).ready(function(){
  var num = $('.nav').offset().top;
  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > num) {
      $('.nav').addClass('fixed');
    } else {
      $('.nav').removeClass('fixed');
    }
  });
});

// // ****** ABOUT CAROUSEL ******

// $(document).ready(function(){
//   $('.test-three').hide();
//   $('.test-four').hide();
//   $('.test-one').animate({right: '-100%'}, 4000, function(){
//     $('.test-two').animate({right: '-100%'}, 4000)
//   };
// });

