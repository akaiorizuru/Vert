$(document).ready(function() {
	//à compléter
	$("header#home").height(windowsHeight);
	$.backstretch("./images/background.jpg");

	var sf = calculerEchelle($(this));
	$('.backstretch img').css({
		'transform' : 'scale(' + sf + ')',
	});
	
	$(window).scroll(function() {
		//à compléter
		// var sf = calculerEchelle($(this));
		// $('.backstretch img').css({
		// 	'transform' : 'scale(' + sf + ')',
		// });

		// var op = calculerOpacite($(this));
		// $('#home>div').css('opacity', op);

		// if ($(this).scrollTop() > windowsHeight){
		// 	$('.backstretch').hide();
		// }
		// else {
		// 	$('.backstretch').show();
		// }


		if ($(this).scrollTop() > windowsHeight){
			$('.backstretch').hide();
			$('#home>div').hide();
		}
		else {
			$('.backstretch').show();
			$('#home>div').show();
				
			var sf = calculerEchelle($(this));
			$('.backstretch img').css({
				'transform' : 'scale(' + sf + ')',
			});

			var op = calculerOpacite($(this));
			$('#home>div').css('opacity', op);
		}
	});
});

var windowsHeight = $(window).height();
var coefZoom = 0.3;

function calculerEchelle(element) {
	var scrollTop = element.scrollTop();
	var scale = (1 + coefZoom) - (coefZoom * (scrollTop / windowsHeight));
	return scale;
}

function calculerOpacite(element) {
	var scrollTop = element.scrollTop();
	var opacite = 1 - 2 * (scrollTop / windowsHeight);
	return opacite;
}