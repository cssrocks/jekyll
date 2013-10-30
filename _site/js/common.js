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