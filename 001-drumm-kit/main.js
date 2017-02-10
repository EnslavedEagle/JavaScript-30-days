var keys = document.querySelectorAll('.key');

function playKey(key) {
	var visualKey = document.querySelector('.key[data-key="'+key+'"]');
	visualKey.classList.add('pressed');

	var audio = document.querySelector('audio[data-key="'+key+'"]');
	if(!audio) return;

	audio.currentTime = 0;
	audio.play();
}

function removeTransition(e) {
	if(e.propertyName !== 'transform') return;
	this.classList.remove('pressed');
}


for(var i = 0; i < keys.length; i++) {
	(function(key) {
		key.addEventListener('click', function() {
			playKey(key.getAttribute('key-code'));
		});
		key.addEventListener('transitionend', removeTransition);
	})(keys[i]);
}

window.addEventListener('keydown', function(e) {
	playKey(e.keyCode)
});