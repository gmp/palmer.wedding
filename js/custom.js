(function() {
	/*****************************
	* Initialize Countdown
	*****************************/
	$('#countdown').countDown({
		targetDate: {
			'day': 		parseInt($('#countdown').data('day')),
			'month': 	parseInt($('#countdown').data('month')),
			'year': 	parseInt($('#countdown').data('year')),
			'hour': 	parseInt($('#countdown').data('hour')),
			'min': 		parseInt($('#countdown').data('min')),
			'sec': 		0
		},
		omitWeeks: true
	});
	/*****************************
	* Initialize Wow - elements animation on scroll
	*****************************/
	new WOW({mobile: false}).init();
	/*****************************
	* Initialize GoogleMap
	*****************************/

	$('#map')
		.on('click', function () {
			$(this).find('.embed-map').addClass('scrollable');
		})
		.on('mouseleave', function() {
			$(this).find('.embed-map').removeClass('scrollable');
		});

	/*****************************
	* Smooth scroll
	*****************************/
	$('[data-scroll]').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 2000, 'easeOutCubic');
        event.preventDefault();
    });

	/*****************************
	* Tabs
	*****************************/
	$('#schedule-tabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});
	/****************************/

	/*****************************
	* Carousel
	*****************************/
	$('#carousel').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  centerMode: true,
	  centerPadding: 50,
	  variableWidth: true,
	  // lazyLoad: 'ondemand',
	});
	/****************************/
})();
