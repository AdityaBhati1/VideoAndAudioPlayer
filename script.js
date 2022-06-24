		var video = document.getElementById('vid');
		var cont = document.getElementById('cont');
		var spanDiv = document.getElementById('spanDiv');
		var playVidbtn = document.getElementById('playVidbtn');
		var change = document.getElementById('change');
		var span = document.getElementsByClassName('span');
		var playAudbtn = document.getElementById('playAudbtn');
		var songName = document.getElementById('songName');
		var load = document.getElementById('load');
		var seekBar = document.getElementById("seek-bar");
		var seekBarBox = document.getElementById("seekBarBox");

		function play(){

			video.play();
			cont.style.display = "none";
			spanDiv.style.display = "flex";
			playVidbtn.style.display = "flex";
			seekBarBox.style.display = "initial";
			document.getElementById('songName').innerHTML = document.getElementById('name1').innerHTML;
			}



		spanDiv.addEventListener("click", function(){
 			 if(video.paused){
    		 video.play();
  			} 
  			else {
   			 video.pause();
  			}
		});



		video.onended = function(){
			cont.style.display = "flex";
			spanDiv.style.display = "none";
			playVidbtn.style.display = "none";
			playAudbtn.style.display = "none";
			video.style.visibility = "hidden";
			spanDiv.style.transform = "scale(1)";
			load.style.height = "400px";
			load.style.width = "400px";
			video.style.height = "400px";
			video.style.width = "400px";
			document.getElementById('songName').innerHTML = document.getElementById('songName').innerHTML;
		}


		function playVideo(){
			video.style.visibility = " visible";
			spanDiv.style.transform = "scale(0.3)";
			spanDiv.style.transition = "all 1.2s";
			spanDiv.style.marginTop = "250px";
			playVidbtn.style.display = "none";
			playAudbtn.style.display = "flex";
			load.style.height = "360px";
			load.style.width = "640px";
			load.style.transition = "all 1.2s";
			video.style.height = "360px";
			video.style.width = "640px";
			video.style.transition = "all 1.2s";
			seekBarBox.style.marginTop = "330px";
		}


		function playAudio(){
			video.style.visibility = " hidden";
			spanDiv.style.transform = "scale(1)";
			playVidbtn.style.display = "flex";
			playAudbtn.style.display = "none";
			spanDiv.style.marginTop = "0px";
			load.style.height = "400px";
			load.style.width = "400px";
			video.style.height = "400px";
			video.style.width = "400px";
			load.style.transition = "all 1.2s";
			video.style.transition = "all 1.2s";
		}

		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


		function playSong1(){
			video.setAttribute('src', 'jake_gyllenhaal_dancing_meme_template_aafd4548.mp4');
			document.getElementById('songName').innerHTML = document.getElementById('name1').innerHTML;
			video.play();
			cont.click();
			if (playAudbtn.style.display == "flex" ) {
				playVidbtn.style.display = "none"
			} 
			else {
				playVidbtn.style.display = "flex";
			}
		}
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


		function playSong2(){
			video.setAttribute('src', 'BROWN MUNDE - AP DHILLON _ GURINDER GILL _ SHINDA KAHLON _ GMINXR.mp4');
			video.play();
			cont.click();
			document.getElementById('songName').innerHTML = document.getElementById('name2').innerHTML;
			if (playAudbtn.style.display == "flex" ) {
				playVidbtn.style.display = "none"
			} 
			else {
				playVidbtn.style.display = "flex";
			}
		}
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


		function playSong3(){
			video.setAttribute('src', 'Coke Studio _ Season 14 _ Pasoori _ Ali Sethi x Shae Gill.mp4');
			video.play();
			cont.click();
			document.getElementById('songName').innerHTML = document.getElementById('name3').innerHTML;
			if (playAudbtn.style.display == "flex" ) {
				playVidbtn.style.display = "none"
			} 
			else {
				playVidbtn.style.display = "flex";
			}
		}
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


		function playSong4(){
			video.setAttribute('src', 'Excuses (Official Video) _ AP Dhillon _ Gurinder Gill _ Intense.mp4');
			video.play();
			cont.click();
			document.getElementById('songName').innerHTML = document.getElementById('name4').innerHTML;
			if (playAudbtn.style.display == "flex" ) {
				playVidbtn.style.display = "none"
			} 
			else {
				playVidbtn.style.display = "flex";
			}
		}
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


		function playSong5(){
			video.setAttribute('src', 'lil nas x - industry baby (slowed + reverb).mp4');
			video.play();
			cont.click();
			document.getElementById('songName').innerHTML = document.getElementById('name5').innerHTML;
			if (playAudbtn.style.display == "flex" ) {
				playVidbtn.style.display = "none"
			} 
			else {
				playVidbtn.style.display = "flex";
			}
		}
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


		function playSong6(){
			video.setAttribute('src', 'bummer.mp4');
			video.play();
			cont.click();
			document.getElementById('songName').innerHTML = document.getElementById('name6').innerHTML;
			if (playAudbtn.style.display == "flex" ) {
				playVidbtn.style.display = "none"
			} 
			else {
				playVidbtn.style.display = "flex";
			}
		}
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


		function playSong7(){
			video.setAttribute('src', 'Metro Boomin - Space Cadet (TikTok Remix) Lyrics ft. Gunna _ bought a spaceship now imma space cadet.mp4');
			video.play();
			cont.click();
			document.getElementById('songName').innerHTML = document.getElementById('name7').innerHTML;
			if (playAudbtn.style.display == "flex" ) {
				playVidbtn.style.display = "none"
			} 
			else {
				playVidbtn.style.display = "flex";
			}
		}
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


		function playSong8(){
			video.setAttribute('src', 'we rollin - shubh (slowed reverb).mp4');
			video.play();
			cont.click();
			document.getElementById('songName').innerHTML = document.getElementById('name8').innerHTML;
			if (playAudbtn.style.display == "flex" ) {
				playVidbtn.style.display = "none"
			} 
			else {
				playVidbtn.style.display = "flex";
			}
		}
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


		function playSong9(){
			video.setAttribute('src', 'Too Many Girls.mp4');
			video.play();
			cont.click();
			document.getElementById('songName').innerHTML = document.getElementById('name9').innerHTML;
			if (playAudbtn.style.display == "flex" ) {
				playVidbtn.style.display = "none"
			} 
			else {
				playVidbtn.style.display = "flex";
			}
		}
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


		function playSong10(){
			video.setAttribute('src', 'Teri Lat.mp4');
			video.play();
			cont.click();
			document.getElementById('songName').innerHTML = document.getElementById('name10').innerHTML;
			if (playAudbtn.style.display == "flex" ) {
				playVidbtn.style.display = "none"
			} 
			else {
				playVidbtn.style.display = "flex";
			}
		}



seekBar.addEventListener("change", function() {

  var time = video.duration * (seekBar.value / 100);


  video.currentTime = time;
});


video.addEventListener("timeupdate", function() {

  var value = (100 / video.duration) * video.currentTime;


  seekBar.value = value;
});
	

seekBar.addEventListener("mousedown", function() {
  video.pause();
});


seekBar.addEventListener("mouseup", function() {
  video.play();
});