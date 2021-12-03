$(document).ready(function() {

	// Partie scrollTo top
	$('div.scrolltop .scroll').click(function() {
		$('html, body').animate({
			scrollTop : 0
		}, 1000, "linear");
	});

	// On cache le scrollTo top quand on visualise le header (mouvement vers le
	// haut) à partir de 20% du bas
	$("header#home").waypoint(function(direction) {
		if (direction === 'up') {
			$("div.scrolltop").hide();
		}
	}, {offset : '-20%'});

	// On montre le scrollTo top dès qu'on atteint la section#services
	// (mouvement vers le bas, offset de 56px dù au menu)
	$("section#services").waypoint(function(direction) {
		if (direction === 'down') {
			$("div.scrolltop").show();
		}
	},{offset : '56px'});
});
