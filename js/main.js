(function ($) {
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

})(jQuery);

//This is sort of CSS-only; the JS below just sticks a span around each letter, so i can animate each independantly.
//(oh for an :nth-letter selector!)
const labels = document.querySelectorAll('.label');
labels.forEach(label => {
  const chars = label.textContent.split('');
  label.innerHTML = '';
  chars.forEach(char => {
    label.innerHTML += `<span>${char === ' ' ? '&nbsp' : char}</span>`;
  });
})