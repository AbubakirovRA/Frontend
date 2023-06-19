// document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector(".video");
    const playButton = document.querySelector(".play-button");
    const pauseButton = document.querySelector(".pause-button");
    const progressBar = document.querySelector(".progress-bar");
    const timeDisplay = document.querySelector(".time-display");
    const volumeBar = document.querySelector(".volume-bar");

    playButton.addEventListener("click", playVideo);
    pauseButton.addEventListener("click", pauseVideo);
    video.addEventListener("timeupdate", updateProgress);
    volumeBar.addEventListener("input", changeVolume);

    function playVideo() {
        video.play();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
    }

    function pauseVideo() {
        video.pause();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }

    function updateProgress() {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.value = progress;
        updateTimeDisplay();
      }
    
      function updateTimeDisplay() {
        let currentMinutes = Math.floor(video.currentTime / 60);
        let currentSeconds = Math.floor(video.currentTime % 60);
        let durationMinutes = Math.floor(video.duration / 60);
        let durationSeconds = Math.floor(video.duration % 60);
    
        if (currentSeconds < 10) {
          currentSeconds = "0" + currentSeconds;
        }
    
        if (durationSeconds < 10) {
          durationSeconds = "0" + durationSeconds;
        }
    
        timeDisplay.textContent = currentMinutes + ":" + currentSeconds + " / " + durationMinutes + ":" + durationSeconds;
      }

      function changeVolume() {
        video.volume = volumeBar.value;
      }
// });