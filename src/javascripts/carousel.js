$(document).ready(function(){
	var prevBtnSelector = '#a11y_carousel__prev-button',
		nextBtnSelector = '#a11y_carousel__next-button',
		carouselElementSelector = '.a11y_js-carousel__link';
	
	$('.a11y_carousel').slick({
		slide: carouselElementSelector,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		accessibility: true,
		arrows: false
	});

	var prevBtn = $(prevBtnSelector),
		nextBtn = $(nextBtnSelector),
		self = this;

	prevBtn.click(function () { 
		$('.a11y_carousel').slickPrev(); 
	});

	nextBtn.click(function () { 
		$('.a11y_carousel').slickNext(); 
	});

	$('.slick-list').attr('tabindex', '-1');
	$('.slick-track').attr('tabindex', '-1');

	$(carouselElementSelector).each(function () {

	});
});