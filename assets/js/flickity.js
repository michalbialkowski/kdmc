$(window).on('load', function() {
	$('.flickity--slider').flickity({
		cellAlign: 'center',
		contain: true,
		freeScroll: false,
		wrapAround: true,
		pageDots: true,
		autoPlay: true
	});
});