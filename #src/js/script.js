@@include('functions.js', {});
@@include('jquery-3.6.0.slim.min.js', {});
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
	slidesToScroll: 1,
	easing: 'ease',
	touchThreshold: 10,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 850,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 580,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});
