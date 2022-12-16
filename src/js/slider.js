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
  initialSlide: 0,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
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
  infinite: true,
  arrows: true,
  appendArrows: '.slider-arrows',
  prevArrow: '<button type="button" class="left-arrow"></button > ',
  nextArrow: '<button type="button" class="right-arrow"></button>',
});

// SLICK-SLIDER REST

$('.rest-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  arrows: true,
  appendArrows: '.slider-arrows',
  prevArrow: '<button type="button" class="left-arrow"></button > ',
  nextArrow: '<button type="button" class="right-arrow"></button>',
});

// SLICK-SLIDER hotel

$('.hotel-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  arrows: true,
  appendArrows: '.about-hotel__slider-arrows',
  prevArrow:
    '<button type="button" class="about-hotel__left-arrow"></button > ',
  nextArrow: '<button type="button" class="about-hotel__right-arrow"></button>',
});

// SLICK SLIDER ROOM

$('.room-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  initialSlide: 0,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
});

// SLICK SLIDER ROOM for 3

$('.room-slider-for-3').slick({
  dots: false,
  infinite: true,
  speed: 300,
  initialSlide: 0,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  prevArrow: $('.room-for-3-svg__left'),
  nextArrow: $('.room-for-3-svg__right'),
});
