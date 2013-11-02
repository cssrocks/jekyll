$(document).ready(function() {

	hljs.initHighlightingOnLoad();

	$(".js-scroll-btn").click(function (){
		$('html, body').animate({
			scrollTop: $("#js-scroll-to").offset().top
		}, 500);
	});

	jQuery('.icon_add').click(function (event) {
		jQuery('.social').slideToggle();
	});

	var target = $('.js-header-content');
	var targetHeight = target.outerHeight();

	$(document).scroll(function(e){
		var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
		if(scrollPercent >= 0){
			target.css('opacity', scrollPercent);
		}
	});

});

$(function() {

	var footerHeight = $(".footer").height();
	$(".out").css("margin-bottom", -footerHeight);
	$(".push").css("height", footerHeight);

});

$(window).resize(function() {

	var footerHeight = $(".footer").height();
	$(".out").css("margin-bottom", -footerHeight);
	$(".push").css("height", footerHeight);

});