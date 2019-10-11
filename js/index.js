
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

// ****** HAMBURGER MENU ******

$('.hamburger').on('click', function(){
  $('nav').animate({left: 0});
});


$('.close-nav').on('click', function(){
  $('nav').animate({left: '100%'});
});

$(window).on('resize', function(){
  $('nav').removeAttr('style');
});

// ****** QUIZ BUTTON CLICKS ******

$(document).ready(function(){
  $('.questions').hide();
});
$('.quiz-start').on('click', function(){
  $('.active').next('div').addClass('active').prev('div').removeClass('active');
});

// ****** ABOUT CAROUSEL ******

// $(document).ready(function(){
//   $('.test-three').hide();
//   $('.test-four').hide();
//   $('.test-one').animate({right: '-100%'}, 4000, function(){
//     $('.test-two').animate({right: '-100%'}, 4000)
//   };
// });

