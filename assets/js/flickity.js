$(window).on('load', function() {
	$('.flickity--slider').each(function() {
		var options = {
			contain: true,
			freeScroll: false,
			adaptiveHeight: false,
			autoPlay: true
		};
		
		if ($(this).hasClass('justify-content-start')) {
			options.cellAlign = 'left';
		} else if ($(this).hasClass('justify-content-center')) {
			options.cellAlign = 'center';
		} else if ($(this).hasClass('justify-content-end')) {
			options.cellAlign = 'right';
		} else {
			options.cellAlign = 'left';
		}
		
		if ($(this).hasClass('flickity--dots')) {
			options.pageDots = true;
		} else {
			options.pageDots = false;
		}
		
		if ($(this).hasClass('flickity--nav')) {
			options.prevNextButtons = true;
		} else {
			options.prevNextButtons = false;
		}
		
		if ($(this).hasClass('flickity--loop')) {
			options.wrapAround = true;
		} else {
			options.wrapAround = false;
		}
		
		$(this).flickity(options);
	});
});