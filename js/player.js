// Media Player Script

//Play-Pause Button

window.addEventListener('load', function() {

	//Video Container
	video = document.getElementById('video');

	//Progress Bar Container
	pbarContainer = document.getElementById('pbar-container');
	pbar = document.getElementById('pbar');

	//Buttons Container
	playButton = document.getElementById('play-button');
	timeField = document.getElementById('time-field');
	soundButton = document.getElementById('sound-button');
	fullscreenButton = document.getElementById('fullscreen-button');


	playButton.addEventListener('click', playOrPause, false);
	pbarContainer.addEventListener('click', skip, false);
	updatePlayer();
	soundButton.addEventListener('click', muteOrUnmute, false);
	fullscreenButton.addEventListener('click', fullscreen, false);

}, false);

function playOrPause() {
	if (video.paused) {
		video.play();
		playButton.src = 'icons/pause-icon.png';
		update = setInterval(updatePlayer,30);
	} else {
		video.pause();
		playButton.src = 'icons/play-icon.png';
		window.clearInterval(update);
	}
}

//Progress Bar

function updatePlayer() {
	var percentage = (video.currentTime/video.duration)*100;
	pbar.style.width = percentage + '%';
	timeField.innerHTML = getFormattedTime();
	if (video.ended) {
		window.clearInterval(update);
		playButton.src = 'icons/replay-icon.png';
	}
}

function skip(ev) {
	var mouseX = ev.pageX - pbarContainer.offsetLeft-106;
	var width = window.getComputedStyle(pbarContainer).getPropertyValue('width');
	width = parseFloat(width.substr(0, width.length -2));

	video.currentTime = (mouseX/width)*video.duration;
	updatePlayer();
}

function getFormattedTime() {
	
	var seconds = Math.round(video.currentTime); 
	var minutes = Math.floor(seconds/60);
	if (minutes > 0) seconds -= minutes*60;
	if (seconds.toString().length === 1) seconds = '0' + seconds;

	var totalSeconds = Math.round(video.duration);
	var totalMinutes = Math.floor(totalSeconds/60);
	if (totalMinutes > 0) totalSeconds -= totalMinutes*60;
	if (totalSeconds.toString().length === 1) totalSeconds = '0' + totalSeconds;

	return minutes + ":" + seconds + ' / ' + totalMinutes + ':' + totalSeconds;
}

function muteOrUnmute () {
	if (!video.muted) {
		video.muted = true; 
		soundButton.src = 'icons/volume-off-icon.png';
	} else {
		video.muted = false;
		soundButton.src = 'icons/volume-on-icon.png';
	}
}

function fullscreen() {
	if (video.requestFullscreen) {
		video.requestFullscreen();
	} else if (video.webkitRequestFullscreen) {
		video.webkitRequestFullscreen();
	} else if (video.mozRequestFullscreen) {
		video.mozRequestFullscreen();
	} else if (video.msRequestFullscreen) {
		video.msRequestFullscreen();
	}
}



