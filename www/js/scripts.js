$(document).ready(function() {		
	
	// Partie gestion activation des animations lors du scroll sur les éléments à animer
	$('.scrollimation').waypoint(function() {
		$(this.element).addClass('in');
	}, {offset : '90%'});
	
	// Partie affichage des compétences lors du scroll sur la section
	$('#skills').waypoint(function(){		
		affiche_skills();		
	},{offset:'50%'});
	
	// Affichage des statistiques/compteurs lorsque la section est à 80% du top
	$("#stats").waypoint(function() {
		$(".counter").countTo();
	},{offset:'80%'});
	
	// Modification background menu bootstrap pour supprimer
	// la transparence lorsque l'on atteint la partie services
	$("#services").waypoint(function() {
		$("#main-nav").toggleClass('bg-transparent');
		$("#main-nav").toggleClass('bg-white');
	},{offset:'56px'});	

});

