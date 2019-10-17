
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
    'image': '<img class="product-img" src="images/products/carols-daughter-hair-mask.png" alt="SACRED TIARE RESTORING HAIR MASK (8 OZ.)">',
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
    'image': '<img class="product-img" src="images/products/aunt-jackies-conditioning-masque.png" alt="CURLS & COILS FLAXSEED RECIPES FIX MY HAIR INTENSIVE REPAIR CONDITIONING MASQUE (15 OZ.)">',
    'porosity': 'low',
    'density': 'high',
    'protein': 'no',
  },
  {
    'name': 'UNCLE FUNKY\'S DAUGHTER HEAL & RENEW INTENSIVE HAIR MASQUE (8 OZ.)',
    'image': '<img class="product-img src="images/products/uncle-funky-masque.png alt="HEAL AND RENEW INTENSIVE HAIR MASQUE">',
    'porosity': 'high',
    'density': 'high',
    'protein': 'yes',    
  },
  {
    'name': 'AUNT JACKIE\'S CURLS & COILS CURL LA LA DEFINING CURL CUSTARD (15 OZ.)',
    'image': '<img class="product-img" src="images/products/aunt-jackies-curl-custard.png" alt="CURLS & COILS CURL LA LA DEFINING CURL CUSTARD (15 OZ.)">',
    'porosity': 'low',
    'density': 'high',
    'protein': 'no',    
  },
  {
    'name': 'DEVACURL FRIZZ-FREE VOLUMIZING FOAM (7.5 OZ.)',
    'image': '<img class="product-img" src="images/products/devacurl-volumizing-foam.png" alt="DEVACURL FRIZZ-FREE VOLUMIZING FOAM (7.5 OZ.)">',
    'porosity': 'high',
    'density': 'low',
    'protein': 'no',    
  },
  {
    'name': 'CAMILLE ROSE NATURALS ALMOND JAI TWISTING BUTTER (8 OZ.)',
    'image': '<img class="product-img" src="images/products/camille-rose-almond-butter.png" alt="CAMILLE ROSE NATURALS ALMOND JAI TWISTING BUTTER (8 OZ.)">',
    'porosity': 'low',
    'density': 'high',
    'protein': 'no',    
  },
  {
    'name': 'BED HEAD BY TIGI FOXY CURLS CONTOUR CREAM (6.76 OZ.)',
    'image': '<img class="product-img" src="images/products/tigi-bed-head-foxycurls.png" alt="BED HEAD BY TIGI FOXY CURLS CONTOUR CREAM (6.76 OZ.)">',
    'porosity': 'high',
    'density': 'low',
    'protein': 'no',    
  },
  {
    'name': 'CANTU MOISTURIZING CURL ACTIVATOR CREAM (12 OZ.)',
    'image': '<img class="product-img" src="images/products/cantu-curl-activator.png" alt="CANTU MOISTURIZING CURL ACTIVATOR CREAM (12 OZ.)">',
    'porosity': 'low',
    'density': 'low',
    'protein': 'yes',
  },
  {
    'name': 'MIXED CHICKS LEAVE-IN CONDITIONER (10 OZ.)',
    'image': '<img class="product-img" src="images/products/mixed-chicks-leave-in.png" alt="MIXED CHICKS LEAVE-IN CONDITIONER (10 OZ.)">',
    'porosity': 'high',
    'density': 'high',
    'protein': 'no',    
  },
  {
    'name': 'SHEAMOISTURE BAOBAB & TEA TREE OILS LOW POROSITY PROTEIN-FREE LEAVE-IN DETANGLER (8 OZ.)',
    'image': '<img class="product-img" src="images/products/shea-moisture-detangler.png" alt="SHEAMOISTURE BAOBAB & TEA TREE OILS LOW POROSITY PROTEIN-FREE LEAVE-IN DETANGLER (8 OZ.)">',
    'porosity': 'low',
    'density': 'high',
    'protein': 'no',    
  },
  {
    'name': 'OUIDAD MOISTURE LOCK LEAVE-IN CONDITIONER (8.5 OZ.)',
    'image': '<img class="product-img" src="images/products/ouidad-leave-in.png" alt="OUIDAD MOISTURE LOCK LEAVE-IN CONDITIONER (8.5 OZ.)">',
    'porosity': 'low',
    'density': 'low',
    'protein': 'no',    
  },
];

$('.quiz-start').on('click', function(){
  // $('.quiz-welcome').hide();
  // $('.quiz-1').show();
  $('.questions.active').removeClass('active').next('.questions').addClass('active');
});

$('.questions .user-option').on('click', function(){
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
      $('.quiz-headers, .definition, .quiz-grafs, #results-pic, .options.e.test').hide();
      // $('.quiz-grafs').html('*PSST* YOUR CURLS TOLD US THEY WANT THIS...');
      // $('.congrats').html(products[num].image);
      $('.congrats').append("<img style='height: 180px; width: 180px; border-radius: 50%' src='"+products[num].image+"' />");
    }
    else if (userSelection.density === products[num].density) {
      console.log(products.name);
      $('.quiz-headers, .definition, .quiz-grafs, #results-pic, .options.e.test').hide();
      // $('.quiz-grafs').html('*PSST* YOUR CURLS TOLD US THEY WANT THIS...');
      $('.congrats').append("<img style='height: 180px; width: 180px; border-radius: 50%' src='"+products[num].image+"' />");
    }
    else if (userSelection.protein === products[num].protein) {
      console.log(products.name);
      $('.quiz-headers, .definition, .quiz-grafs, #results-pic, .options.e.test').hide();
      // $('.quiz-grafs').html('*PSST* YOUR CURLS TOLD US THEY WANT THIS...');
      $('.congrats').append("<img style='height: 180px; width: 180px; border-radius: 50%' src='"+products[num].image+"' />");
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

