((w, d) => {
	if (!('Notification' in w)) {
		return;
	}

	var
		button = d.querySelector('#notification'),
		classActive = 'is-active',
		notificationDuration = 4000,
		intervalDuration = 10000,
		intervalTimer,
		notification
	;

	function notificate() {
		if (notification) {
			notification.close();
		}

		notification = new Notification(cumberbatch.random());

		w.setTimeout(notification.close.bind(notification), notificationDuration);
	}

	button.addEventListener('click', function() {
		// Disable
		if (button.classList.contains(classActive)) {
			button.classList.remove(classActive);
			button.blur();
			w.clearInterval(intervalTimer);
			return;
		}

		// Enable
		button.classList.add(classActive);

		// Permission
		if (Notification.permission === 'granted') {
			notificate();
		} else if (Notification.permission !== 'denied' || Notification.permission === 'default') {
			Notification.requestPermission(function(permission) {
				if (permission === 'granted') {
					notificate();
				}
			});
		}

		// Interval
		intervalTimer = w.setInterval(notificate, intervalDuration);
	});

})(window, document);
