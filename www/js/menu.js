$(document).ready(function() {

	// Gestion du scroll
	$('.scrollto').click(function(e) {
		e.preventDefault();

		var page = $(this).attr('href');
		var speed = 750;

		$('html, body').animate({
			scrollTop : $(page).offset().top - 56
		}, speed);

		// à compléter
		// pour refermer le menu (en mode mobile) lorsqu'on a cliqué sur un lien
		// $('#navbar').collapse('hide');
	});

	// à compléter
	// pour mettre en évidence la section en cours dans le menu
	$("section").waypoint(function(direction) {
		if (direction === 'down') {
			changeActiveItem(this);
		}
	}, {
		offset : '70px'
	});

	$("section").waypoint(function(direction) {
		if (direction === 'up') {
			changeActiveItem(this);
		}
	}, {
		offset : '-70px'
	});

	// à compléter
	// pour mettre en évidence la section en cours dans le menu
	// $('body').scrollspy({
	// 	target: '#main-nav',
	// 	offset: 56
	// });


});