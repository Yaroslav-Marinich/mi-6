// SMALL GALLERIES SLIDER - SLICK SCRIPT

$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

// ROOMS PAGE SLIDER - SLICK SCRIPT

$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
});

// SLICK SLIDER FOR VARIABLE WIDTH

$('.variable-width').slick({
  dots: false,
  infinite: true,
  speed: 300,
  initialSlide: 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
});

// SLICK-SLIDER Mini

$('.autoplay-mini').slick({
  slidesToShow: 1.1,
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
});

// Restaurant page -> Kitchen Section -> Slider
$('.kitchen-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: false,
  autoplaySpeed: 1000,
  infinite: true,
  arrows: true,
  appendArrows: '.slider-arrows',
  prevArrow: '<button class="left-arrow"></button > ',
  nextArrow: '<button class="right-arrow"></button>',
});

// SLICK SLIDER FOR VARIABLE WIDTH (ROOM-FOR-3-ADULT)

$('.room-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  initialSlide: 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
});
