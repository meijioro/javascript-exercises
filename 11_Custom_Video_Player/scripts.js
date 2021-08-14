const player = document.querySelector(".player");
const video = player.querySelector(".player__video");
const playBtn = player.querySelector(".toggle");
const volume = player.querySelector("input[name='volume']");
const playRate = player.querySelector("input[name='playbackRate']");
const skip = player.querySelectorAll("[data-skip]");
const bar = player.querySelector(".progress__filled");
const progress = player.querySelector(".progress");

let isPlaying = false;

function playVideo() {
  isPlaying = !isPlaying; // toggle value

  if (isPlaying) {
    video.play();
    playBtn.innerHTML = `<span aria-hidden="true">❚❚</span`;
  } else {
    video.pause();
    playBtn.innerHTML = '<span aria-hidden="true">►</span>';
  }

  /* Alt way
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  */
}

function changeVolume() {
  video.volume = this.value;
}

function changePlayRate() {
  video.playbackRate = this.value;
}

function skipTo() {
  const currentTime = video.currentTime;

  // if not beginning or ended video
  if (currentTime > 0 || currentTime < video.duration) {
    video.currentTime = currentTime + this.dataset.skip * 1; // convert skip to number and adjust time
  }
}

function progressBar() {
  const percent = (video.currentTime / video.duration) * 100;
  bar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const time = (e.offsetX / this.offsetWidth) * video.duration;
  video.currentTime = time;
}

video.addEventListener("click", playVideo);
playBtn.addEventListener("click", playVideo);
volume.addEventListener("input", changeVolume);
playRate.addEventListener("input", changePlayRate);

skip.forEach((btn) => {
  btn.addEventListener("click", skipTo);
});

// while video is playing
video.addEventListener("timeupdate", progressBar);

// play if spacebar is hit
document.addEventListener("keypress", function (e) {
  if (e.code == "Space") {
    playVideo();
  }
});

progress.addEventListener("click", scrub);
