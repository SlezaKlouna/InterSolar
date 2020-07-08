$(function (){
/*	$('.banner-slider').slick({
		arrows: false,
		dots: true
	});*/


	$('.menu-toggle').click(function(){
		$(this).toggleClass('active');
		$('.menu').slideToggle(400);
	});


	$('.portfolio-slider').slick({
		dots:true,
		appendArrows: '.portfolio-slider__buttons',
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
		responsive: [
		{
			breakpoint: 980,
			settings: {
				dots: false,
			}
		}]
	});
});


$(function () {
	'use strict'; //
	$('a[href^="#"]').click(function() { //для всех ссылок начинающихся с # при клике по ним сделать
		let target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 800);
	});
});