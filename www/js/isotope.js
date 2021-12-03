$(document).ready(function() {
	
	// Creer isotope
	$grid = $('.grid').isotope({
		itemSelector : '.grid-item',
		masonry : {
			columnWidth : ".grid-sizer",
			gutter : 0
		}
	});

	// Gestion filtrage
	$(".filter").on("click", function(e) {
		e.preventDefault();
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({
			filter : filterValue
		});
		$(".filter.active").removeClass("active");
		$(this).addClass("active");
	});
});