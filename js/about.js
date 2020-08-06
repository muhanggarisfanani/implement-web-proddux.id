(function($) {
    "use strict";

    var nav = $('nav');
	var navHeight = nav.outerHeight();

    // Preloader - Menghapus preloader setelah web terload sempurna
	$(window).on('load', function () {
		if ($('#preloader-bg').length) {
			$('#preloader-bg').delay(0).fadeOut('slow', function () {
				$(this).remove();
			});
		}
	});

    // Inisiasi owl-carousel
    $(".owl-carousel").owlCarousel({
		autoplay: true,
		autoPlay: 2500,
		autoplayHoverPause: true,
		loop: true,
        margin: 30,
		nav: true,
        pagination: true,
        responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
        }
    });

    // Back to top button - Memunculkan tombol scroll jika halaman sudah discroll minimal 100 satuan - Menscroll jika diklik
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
		return false;
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});
	
	$('.navbar-toggler').on('click', function() {
		if( ! $('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
	})

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/ 
	// untuk transparan ketika diatas, ada warnanya ketika di scroll
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
		var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 50,
			loop: true,
			backDelay: 750,
			backSpeed: 10
		});
    }
    
    var wowAnimation = function() {
		var wow = new WOW(
			{
				animateClass: 'animated',
				offset: 150,
				callback: function(box) {
					console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
				}
			});
			wow.init();
		}

	wowAnimation();
})(jQuery);