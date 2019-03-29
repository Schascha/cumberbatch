(() => {
	const
		Synth = window.speechSynthesis,
		Speech = window.SpeechSynthesisUtterance
	;

	// Feature detection
	if (!Synth || !Speech) {
		return;
	}

	// Voice select
	var
		voices = [],
		voiceSelect = document.createElement('select')
	;

	voiceSelect.className = 'voices';
	document.body.appendChild(voiceSelect);

	function populateVoiceList() {
		voices = Synth.getVoices();
		voices.forEach((voice, index) => {
			const option = document.createElement('option');
			option.value = index;
			option.textContent = `${voice.name} (${voice.lang})`;
			voiceSelect.appendChild(option);

			if (voice.name === 'Daniel') {
				option.selected = true;
			}
		});
	}

	populateVoiceList();
	if (window.speechSynthesis.onvoiceschanged !== undefined) {
		window.speechSynthesis.onvoiceschanged = populateVoiceList;
	}

	// Speak
	var
		el = document.querySelector('h1'),
		isSpeaking = false
	;

	el.onclick = function() {
		if (isSpeaking) {
			return;
		}

		isSpeaking = true;

		var speech = new Speech(el.innerHTML);

		speech.voice = voices[parseInt(voiceSelect.value, 10)];
		Synth.speak(speech);

		speech.onend = function() {
			isSpeaking = false;
		}

		speech.onerror = function() {
			isSpeaking = false;
		}
	}
})();
