(() => {
  console.log('video stuff loaded!');

  String.prototype.capIt = function() { return this.replace(this.charAt(), this.charAt().toUpperCase()); }
  //replace word beginning letter with an uppercase to match video names, this means it is always the thing that owns the function at that point

  //varible stack goes here
  let sigils = document.querySelectorAll('.sigilContainer'),
	  lightbox = document.querySelector('.lightbox'),
	  closeLightBoxButton = document.querySelector('.close-lightbox'),
    vidPlayer = document.querySelector('video'),
    vidControls = document.querySelector('.controls');

  //functions go in the middle
	function showHouseVideo() {
    let houseName = this.className.split(' ')[1].capIt();
    //split apart the class name on the elemnet, grab the house from the result
    document.querySelector('h1').textContent = `House ${houseName}`;
    //debugger;
		lightbox.classList.add('show-lightbox');
		//make the video play
    vidPlayer.src = `video/House-${houseName}.${vidPlayer.currentSrc.split('.')[1]}`;
    vidPlayer.load();
    vidPlayer.play();
	}

	function closeLightBox() {
		lightbox.classList.remove('show-lightbox');
		//stop the video and rewind it to 0
    vidPlayer.pause();
    vidPlayer.currentTime = 0;
	}

  function pausePlay() {
    //debugger;
    let theButton = this.firstElementChild;
    //if the video is paused, the play button will show
    if (vidPlayer.paused == true) {
      //play the video
      vidPlayer.play();
      theButton.dataset.icon = "pause-circle";
    } else { //if the video is playing, the pause button will show
      vidPlayer.pause();
      theButton.dataset.icon = "play-circle";
    }
  }

  //event handling goes here
	sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
	closeLightBoxButton.addEventListener('click', closeLightBox);
  vidPlayer.addEventListener('ended', closeLightBox);//you can re-use the same functions
  vidControls.addEventListener('click', pausePlay);

})();
