$(document).ready(function(){

	$('.a11y_js-product').hover(
		//mouseenter
		function () {
			var expandableSection = $(this).find('.a11y_js-product__expandable-section');
			expandableSection.addClass('is-expanded');
		},
		//mouseleave
		function () {
			var expandableSection = $(this).find('.a11y_js-product__expandable-section');
			expandableSection.removeClass('is-expanded');
		}
	);

	$('.a11y_js-product').focus(
		//mouseenter
		function () {
			var expandableSection = $(this).find('.a11y_js-product__expandable-section');
			expandableSection.addClass('is-expanded');
		},
		//mouseleave
		function () {
			var expandableSection = $(this).find('.a11y_js-product__expandable-section');
			expandableSection.removeClass('is-expanded');
		}
	);
});