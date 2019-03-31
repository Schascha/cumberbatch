((w, d) => {
	const button = d.querySelector('#notification');

	if (!('Notification' in w)) {
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

		notification = new w.Notification(cumberbatch.random());

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
		if (w.Notification.permission === 'granted') {
			notificate();
		} else if (w.Notification.permission !== 'denied' || w.Notification.permission === 'default') {
			w.Notification.requestPermission(function(permission) {
				if (permission === 'granted') {
					notificate();
				}
			});
		}

		// Interval
		intervalTimer = w.setInterval(notificate, intervalDuration);
	});

})(window, document);
