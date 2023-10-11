import '~/node_modules/slick-carousel/slick/slick.min.js'

document.addEventListener('DOMContentLoaded', () => {

	console.log('TEST');

	const $slider = $('.products-carousel__wrapper');
	const $progressBar = $('.progress');
	const $progressBarLabel = $('.slider__label');

	$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		const calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

		$progressBar
			.css('background-size', calc + '% 100%')
			.attr('aria-valuenow', calc);

		$progressBarLabel.text(calc + '% completed');
	});

	$slider.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 400,
		autoplay: true,
		// arrows: false,
		// prevArrow: '<button class="slide-arrow prev-arrow"></button>',
		// nextArrow: '<button class="slide-arrow next-arrow"></button>'
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 648,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.last-posts__wrapper').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 400,
		// arrows: false,
		// prevArrow: '<button class="slide-arrow prev-arrow"></button>',
		// nextArrow: '<button class="slide-arrow next-arrow"></button>'
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					centerMode: true,
					centerPadding: '100px',
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 771,
				settings: {
					centerMode: true,
					centerPadding: '60px',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

})
