$(function() {

	// Инит фансибокса
	$('.fancybox').fancybox({
		margin: 0,
		padding: 0,
		touch: false
	});

	$('.first-slider').slick({
		arrows: false,
		autoplay: true,
		fade: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		swipe: false
	});

});
