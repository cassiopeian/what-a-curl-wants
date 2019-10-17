
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
    'image': 'images/products/carols-daughter-hair-mask.png',
    'porosity': 'high',
    'density': 'high',
    'protein': 'yes',
  },
  {
    'name': 'AFRICAN PRIDE MOISTURE MIRACLE MOROCCAN CLAY & SHEA BUTTER HEAT-ACTIVATED MASQUE',
    'image': 'images/products/african-pride-masque.png',
    'porosity': 'low',
    'density': 'low',
    'protein': 'no',
  },
  {
    'name': 'AUNT JACKIE\'S CURLS & COILS FIX MY HAIR INTENSIVE REPAIR CONDITIONING MASQUE',
    'image': 'images/products/aunt-jackies-conditioning-masque.png',
    'porosity': 'low',
    'density': 'high',
    'protein': 'no',
  },
  {
    'name': 'UNCLE FUNKY\'S DAUGHTER HEAL & RENEW INTENSIVE HAIR MASQUE (8 OZ.)',
    'image': 'images/products/uncle-funky-masque.png',
    'porosity': 'high',
    'density': 'high',
    'protein': 'yes',    
  },
  {
    'name': 'AUNT JACKIE\'S CURLS & COILS CURL LA LA DEFINING CURL CUSTARD (15 OZ.)',
    'image': 'images/products/aunt-jackies-curl-custard.png',
    'porosity': 'low',
    'density': 'high',
    'protein': 'no',    
  },
  {
    'name': 'DEVACURL FRIZZ-FREE VOLUMIZING FOAM (7.5 OZ.)',
    'image': 'images/products/devacurl-volumizing-foam.png',
    'porosity': 'high',
    'density': 'low',
    'protein': 'no',    
  },
  {
    'name': 'CAMILLE ROSE NATURALS ALMOND JAI TWISTING BUTTER (8 OZ.)',
    'image': 'images/products/camille-rose-almond-butter.png',
    'porosity': 'low',
    'density': 'high',
    'protein': 'no',    
  },
  {
    'name': 'BED HEAD BY TIGI FOXY CURLS CONTOUR CREAM (6.76 OZ.)',
    'image': 'images/products/tigi-bed-head-foxycurls.png',
    'porosity': 'high',
    'density': 'low',
    'protein': 'no',    
  },
  {
    'name': 'CANTU MOISTURIZING CURL ACTIVATOR CREAM (12 OZ.)',
    'image': 'images/products/cantu-curl-activator.png',
    'porosity': 'low',
    'density': 'low',
    'protein': 'yes',
  },
  {
    'name': 'MIXED CHICKS LEAVE-IN CONDITIONER (10 OZ.)',
    'image': 'images/products/mixed-chicks-leave-in.png',
    'porosity': 'high',
    'density': 'high',
    'protein': 'no',    
  },
  {
    'name': 'SHEAMOISTURE BAOBAB & TEA TREE OILS LOW POROSITY PROTEIN-FREE LEAVE-IN DETANGLER (8 OZ.)',
    'image': 'images/products/shea-moisture-detangler.png',
    'porosity': 'low',
    'density': 'high',
    'protein': 'no',    
  },
  {
    'name': 'OUIDAD MOISTURE LOCK LEAVE-IN CONDITIONER (8.5 OZ.)',
    'image': 'images/products/ouidad-leave-in.png',
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
      $('.quiz-headers, .definition, #results-pic, .options.e.test, .go-back').hide();
      $('.curl-quiz').css({'height': '100%', 'width':'85%', 'padding': '80px'});
      $('.quiz-grafs').html('*PSST* YOUR CURLS TOLD US THEY WANT THIS...');
      $('.congrats').append("<img style='height: 180px; width: 180px; border-radius: 50%; display: inline-block; padding: 10px; margin: 0px auto' src='"+products[num].image+"' alt='"+products[num].name+"'>");
    }
    else if (userSelection.density === products[num].density) {
      console.log(products.name);
      $('.quiz-headers, .definition, #results-pic, .options.e.test, .go-back').hide();
      $('.curl-quiz').css({'height': '100%', 'width':'85%', 'padding': '80px'});
      $('.quiz-grafs').html('*PSST* YOUR CURLS TOLD US THEY WANT THIS...');
      $('.congrats').append("<img style='height: 180px; width: 180px; border-radius: 50%; display: inline-block; padding: 10px; margin: 0px auto' src='"+products[num].image+"' alt='"+products[num].name+"'>");
    }
    else if (userSelection.protein === products[num].protein) {
      console.log(products.name);
      $('.quiz-headers, .definition, #results-pic, .options.e.test, .go-back').hide();
      $('.curl-quiz').css({'height': '100%', 'width':'85%', 'padding': '80px'});
      $('.quiz-grafs').html('*PSST* YOUR CURLS TOLD US THEY WANT THIS...');
      $('.congrats').append("<img style='height: 180px; width: 180px; border-radius: 50%; display: inline-block; padding: 10px; margin: 0px auto' src='"+products[num].image+"' alt='"+products[num].name+"'>");
    }
  }
});

// let num = 0; num < products.length; num++

// $(products[num].image).hover(
//   function() {
//     $(this).append($(products[num].name));
//   }, function() {
//     $(this).find(products[num].name).last().remove();
//   }
// );

// $('.congrats').append("<img style='height: 180px; width: 180px; border-radius: 50%; margin: 10px' src='"+products[num].image+"' alt='"+products[num].name+"'>", "<p class='definition'>"+products[num].name+"</p>");

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

$('.guillemet.gauche').on('click', function(){
  $('.slideshow').animate({left: '260px'});
});

