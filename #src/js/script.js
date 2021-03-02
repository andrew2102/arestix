@@include('functions.js', {});
@@include('slick.min.js', {});

// Slider
$('.customer__slider').slick({
   arrows: false,
   dots: true,
   slidesToShow: 1,
   easing: 'ease',
});

$('.screenshots__slider').slick({
   arrows: false,
   dots: true,
   slidesToShow: 4,
   slidesToScroll: 2,
   easing: 'ease',
   touchThreshold: 10,
});

console.log('Hello!');
