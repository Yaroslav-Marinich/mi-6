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

// Restaurant page -> Kitchen Section -> Slider
$('.kitchen-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: false,
  autoplaySpeed: 1000,
});
