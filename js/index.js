
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

let userSelection = {
  'protein': '',
  'density': '',
  'porosity': ''
};

let products = [
  {
    'name': 'CAROL\'S DAUGHTER SACRED TIARE RESTORING HAIR MASK',
    'image': '<img class="product-img" src="images/products/carols-daughter-hair-mask.png" alt="CAROL\'S DAUGHTER SACRED TIARE RESTORING HAIR MASK (8 OZ.)">',
    'porosity': 'high',
    'density': 'high',
    'protein': 'yes',

  },
  {
    'name': 'AFRICAN PRIDE MOISTURE MIRACLE MOROCCAN CLAY & SHEA BUTTER HEAT-ACTIVATED MASQUE',
    'image': '<img class="product-img" src="images/products/african-pride-masque.png" alt="AFRICAN PRIDE MOISTURE MIRACLE MOROCCAN CLAY & SHEA BUTTER HEAT-ACTIVATED MASQUE (12 OZ.)">',
    'porosity': 'low',
    'density': 'low',
    'protein': 'no',

  },
  {
    'name': 'AUNT JACKIE\'S CURLS & COILS FIX MY HAIR INTENSIVE REPAIR CONDITIONING MASQUE',
    'image': '<img class="product-img" src="images/products/aunt-jackies-conditioning-masque.png" alt="AUNT JACKIE\'S CURLS & COILS FLAXSEED RECIPES FIX MY HAIR INTENSIVE REPAIR CONDITIONING MASQUE (15 OZ.)">',
    'porosity': 'low',
    'density': 'high',
    'protein': 'yes',

  },
];

$('.quiz-start').on('click', function(){
  // $('.quiz-welcome').hide();
  // $('.quiz-1').show();
  $('.questions.active').removeClass('active').next('.questions').addClass('active');
});

$('.questions .options').on('click', function(){
  $('.questions.active').removeClass('active').next('.questions').addClass('active');
  userSelection[$(this).attr('data-type')] = $(this).attr('data-value');
  console.log(userSelection);
});

// $('.options.a, .options.b').on('click', function(){
//   // $('.quiz-1').hide();
//   // $('.quiz-2').show();
//   $('.questions.active').removeClass('active').next('.questions').addClass('active');
//   // userSelection.poro = $(this).attr('data-type')
// });
// $('.options.c, .options.d').on('click', function(){
//   // $('.quiz-2').hide();
//   // $('.quiz-3').show();
//   $('.questions.active').removeClass('active').next('.questions').addClass('active');
// });

// $('.go-back').on('click', function(){
//     $('.quiz-1').hide();
//     $('.quiz-welcome').show();
// });

$('.go-back').on('click', function(){
  $('.questions.active').removeClass('active').prev('.questions').addClass('active');
});


$(".test").on("click", function(){
  for (let num = 0; num < products.length; num++){
    if (userSelection.protein === products[num].protein) {
      console.log(products[num].name);
    }
  }
});

// $('.go-back').on('click', function(){
//   $(this).hide().previous('section').show();
// });

// let panel;

// $('.go-back').on('click', function(){
//   if (panel === '.quiz-1') {
//     $('.quiz-1').hide();
//     $('.quiz-welcome').show();
//   }
// });


// $(document).ready(function(){
//   $('.questions').hide();
// });
// $('.quiz-start').on('click', function(){
//   $(this).hide().show('.quiz-2');
// });


// ****** ABOUT CAROUSEL ******

// $(document).ready(function(){
//   $('.test-three').hide();
//   $('.test-four').hide();
//   $('.test-one').animate({right: '-100%'}, 4000, function(){
//     $('.test-two').animate({right: '-100%'}, 4000)
//   };
// });

