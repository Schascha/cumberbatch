(function() {
	const
		Synth = window.speechSynthesis,
		Speech = window.SpeechSynthesisUtterance,
		button = document.querySelector('#audio')
	;

	if (!Synth || !Speech) {
		button.disabled = true;
		return;
	}

	var
		el = document.querySelector('h1'),
		speech = new Speech()
	;

	speech.lang = 'en-GB';

	function speak() {
		if (!button.disabled) {
			speech.text = el.innerHTML;
			button.disabled = true;
			Synth.speak(speech);
		}
	}

	button.onclick = speak;

	speech.onend = function() {
		button.disabled = false;
	}

	document.addEventListener('keydown', function(e) {
		// Enter
		if (e.keyCode === 13 && e.target === document.body) {
			speak();
		}
	});
})();
