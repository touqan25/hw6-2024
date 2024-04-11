var video;

// Initialize the video element and turn off autoplay and turn off looping.

window.addEventListener("load", function() {
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

// Play the video and update the volume information.
const playButton = document.querySelector("#play");
playButton.addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	const vol = document.querySelector("#volume");
	vol.innerHTML = video.volume * 100 + "%";
});

// Pause the video.
const pauseButton = document.querySelector("#pause");
pauseButton.addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

//Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
const slowerButton = document.querySelector("#slower");
slowerButton.addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

//Increase the current video speed each time the button is clicked and log the new speed to the console. Change it by an amount proportional to the slow down. If one slows down three times and then speeds up three times, one should be within 5 digits of 100% again.
const fasterButton = document.querySelector("#faster");
fasterButton.addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

// Advance the current video by 10 seconds. If the video length has been exceeded go back to the start of the video - no farther. Log the current location of the video.
const skipButton = document.querySelector("#skip");
skipButton.addEventListener("click", function() {
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Current location " + video.currentTime);
});

//Mute/unmute the video and update the text in the button accordingly. If the video is already muted, clicking the button should unmute the video and vice versa.
const muteButton = document.querySelector("#mute");
muteButton.addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		muteButton.innerHTML = "Mute";
	} else {
		video.muted = true;
		muteButton.innerHTML = "Unmute";
	}
});

//Change the volume based on the slider and update the volume information.
const slider = document.querySelector("#slider");
slider.addEventListener("change", function() {
	video.volume = slider.value / 100;
	const vol = document.querySelector("#volume");
	vol.innerHTML = video.volume * 100 + "%";
});

//Utilize the existing oldSchool class on the video element
const oldSchoolButton = document.querySelector("#vintage");
oldSchoolButton.addEventListener("click", function() {
	video.classList.add("oldSchool");
});

//Remove the oldSchool class from the video element
const origButton = document.querySelector("#orig");
origButton.addEventListener("click", function() {
	video.classList.remove("oldSchool");
});