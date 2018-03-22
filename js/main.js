(() => {
  console.log('video stuff loaded!');
  //variables come first
  //grab the video
  const  vidPlayer = document.querySelector('video'),
    pauseButton = document.querySelectorAll('button')[0],
    playButton = document.querySelectorAll('button')[1],
    rewindButton = document.querySelectorAll('button')[2];

  //functions go here
  function volOn() {
    vidPlayer.muted = false;
  }

  function volOff() {
    vidPlayer.muted = true;
  }

  function playVideo() {
    //make the player play
    vidPlayer.play();
  }

  function pauseVideo() {
    //make the player pause
    vidPlayer.pause();
  }

  function rewindVideo() {
    //make the player pause
    vidPlayer.currentTime = 0;//can change time time to an expression -->eg. -= 5; (seconds)
  }

  //events go here
  vidPlayer.addEventListener('mouseover', volOn);
  vidPlayer.addEventListener('mouseout', volOff);

  playButton.addEventListener('click', playVideo);
  pauseButton.addEventListener('click', pauseVideo);
  rewindButton.addEventListener('click', rewindVideo);
})();
