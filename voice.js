((w, d) => {
	const
		Synth = w.speechSynthesis,
		Speech = w.SpeechSynthesisUtterance,
		button = d.querySelector('#audio')
	;

	if (!Synth || !Speech) {
		button.disabled = true;
		return;
	}

	var
		el = d.querySelector('h1'),
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

	d.addEventListener('keydown', function(e) {
		// Enter
		if (e.keyCode === 13 && e.target === d.body) {
			speak();
		}
	});
})(window, document);
