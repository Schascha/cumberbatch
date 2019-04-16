(function(cumberbatch) {
	const button = document.querySelector('#notification');

	if (!('Notification' in window) || !cumberbatch) {
		button.disabled = true;
		return;
	}

	var
		classActive = 'is-active',
		notificationDuration = 6000,
		intervalTimer,
		notification
	;

	function sendNotification() {
		if (notification) {
			notification.close();
		}

		notification = new window.Notification(cumberbatch.random(), {
			icon: 'img/logo.png'
		});

		window.setTimeout(notification.close.bind(notification), notificationDuration);
	}

	function permission(callback) {
		if (window.Notification.permission === 'granted') {
			callback();
		} else if (window.Notification.permission !== 'denied' || window.Notification.permission === 'default') {
			window.Notification.requestPermission(function(permission) {
				if (permission === 'granted') {
					callback();
				}
			});
		}
	}

	button.addEventListener('click', function() {
		if (button.classList.contains(classActive)) {
			button.classList.remove(classActive);
			button.blur();
			window.clearInterval(intervalTimer);
			return;
		}

		permission(function() {
			const intervalDuration = Math.max(1, parseInt(button.getAttribute('data-interval')) || 10) * 60000;
			button.classList.add(classActive);
			sendNotification();
			intervalTimer = window.setInterval(sendNotification, intervalDuration);
		});
	});

})(window.cumberbatch);
