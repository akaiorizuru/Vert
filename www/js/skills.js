$(document).ready(function() {
	$('.skills-item').each(function() {
		// à compléter
		var perc = $(this).find('.percent').data('percent');
		$(this).data('height', perc);
	});
});


function affiche_skills() {
	// à compléter
	var nbItem, widthItem;
	var nb = 0;
	nbItem = $('.skills-item').length;
	widthItem = 100 / nbItem;
	$('.skills-graph').css({
		'opacity' : 1
	});
	$('.skills-item').each(function() {
		// à compléter
		$(this).css({
			'height' : $(this).data('height') + '%',
			'width' : widthItem+'%',
			'left' : nb*widthItem+'%'
		});
		nb++;		
	})	
}