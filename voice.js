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
		container = document.querySelector('#audio'),
		voiceSelect = document.createElement('select')
	;

	voiceSelect.className = 'voices';
	container.appendChild(voiceSelect);

	function populateVoiceList() {
		voices = Synth.getVoices();
		voices.forEach((voice, index) => {
			const option = document.createElement('option');
			option.value = index;
			option.textContent = `${voice.name} (${voice.lang})`;
			voiceSelect.appendChild(option);
		});
	}

	populateVoiceList();
	if (window.speechSynthesis.onvoiceschanged !== undefined) {
		window.speechSynthesis.onvoiceschanged = populateVoiceList;
	}

	// Speak
	var button = document.querySelector('#speak');

	button.onclick = function() {
		button.disabled = true;

		var speech = new Speech(document.querySelector('h1').innerHTML);

		speech.voice = voices[parseInt(voiceSelect.value, 10)];
		Synth.speak(speech);

		speech.onend = function() {
			button.disabled = false;
		}

		speech.onerror = function() {
			button.disabled = false;
		}
	}
})();
