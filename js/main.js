(() => {
  console.log('video stuff loaded!');

  //varible stack goes here
  let sigils = document.querySelectorAll('.sigilContainer'),
	  lightbox = document.querySelector('.lightbox'),
	  closeLightBoxButton = document.querySelector('.close-lightbox');
	
  //functions go in the middle
	function showHouseVideo() {
		lightbox.classList.add('show-lightbox');
		//make the video play
	}
	
	function closeLightBox() {
		lightbox.classList.remove('show-lightbox');
		//stop the video and rewind it to 0
	}
	
  //event handling goes here
	sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
	closeLightBoxButton.addEventListener('click', closeLightBox);
})();
