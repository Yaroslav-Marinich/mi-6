// SMALL GALLERIES SLIDER - SLICK SCRIPT

$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

// ROOMS PAGE SLIDER - SLICK SCRIPT

$('.fade').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows: true,
  prevArrow: '<div class="luxe-left__arrow"></div>',
  nextArrow: '<div class="luxe-right__arrow"></div>',
});

// SLICK SLIDER FOR VARIABLE WIDTH

$('.variable-width').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 3000,
});

// SLICK-SLIDER Mini

$('.autoplay-mini').slick({
  slidesToShow: 1.1,
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
});
