var $notifications;

function notify(text) {
	var $notification = $('<li />').text(text).css({
		left : 320
	})
	$notifications.append($notification)
	$notification.animate({
		left : 0
	}, 300, function() {
		$(this).delay(3000).animate({
			left : 320
		}, 200, function() {
			$(this).slideUp(100, function() {
				$(this).remove()
			})
		})
	})
}

function changeActiveItem(section) {
	$('nav#main-nav div#navbar ul a').removeClass('active');
	currentSection = section.element.id;
	$('.target-' + currentSection).addClass('active');
}