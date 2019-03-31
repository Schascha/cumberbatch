(() => {
	const button = document.querySelector('#notification');

	if (!('Notification' in window)) {
		button.disabled = true;
		return;
	}

	var
		classActive = 'is-active',
		notificationDuration = 4000,
		intervalDuration = 60000,
		intervalTimer,
		notification
	;

	function notificate() {
		if (notification) {
			notification.close();
		}

		notification = new window.Notification(cumberbatch.random());

		window.setTimeout(notification.close.bind(notification), notificationDuration);
	}

	button.addEventListener('click', function() {
		// Disable
		if (button.classList.contains(classActive)) {
			button.classList.remove(classActive);
			button.blur();
			window.clearInterval(intervalTimer);
			return;
		}

		// Enable
		button.classList.add(classActive);

		// Permission
		if (window.Notification.permission === 'granted') {
			notificate();
		} else if (window.Notification.permission !== 'denied' || window.Notification.permission === 'default') {
			window.Notification.requestPermission(function(permission) {
				if (permission === 'granted') {
					notificate();
				}
			});
		}

		// Interval
		intervalTimer = window.setInterval(notificate, intervalDuration);
	});

})();
