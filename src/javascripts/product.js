$(document).ready(function(){

	$('.a11y_js-product-item').hover(
		//mouseenter
		function () {
			var expandableSection = $(this).find('.a11y_js-product-item__expandable-section');
			expandableSection.addClass('is-expanded');
		},
		//mouseleave
		function () {
			var expandableSection = $(this).find('.a11y_js-product-item__expandable-section');
			expandableSection.removeClass('is-expanded');
		}
	);

	$('.a11y_js-add-to-cart').click(function () {
		var counter = $('.a11y_js-cart-counter'),
			value = JSON.parse(counter.attr('data-value'));

		value++;
		counter.attr('data-value', value);

		counter.html(''+ value +'');
	});

	$('.a11y_js-product-item').focus(
		//mouseenter
		function () {
			var expandableSection = $(this).find('.a11y_js-product-item__expandable-section');
			expandableSection.addClass('is-expanded');
		},
		//mouseleave
		function () {
			var expandableSection = $(this).find('.a11y_js-product-item__expandable-section');
			expandableSection.removeClass('is-expanded');
		}
	);
});