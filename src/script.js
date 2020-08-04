'use strict';

const footer = 
		<div class="footer">
	        <img src="images/lvlz/woollim_logo.png" alt="Woollim" class="woollim-logo"/>
	        <div class="snsicon">
	          <a href="http://lvlz8.com/" target="_blank"><img src="images/ico_art_home.png" alt="Homepage"/></a>
	          <a href="http://www.youtube.com/lvlz8" target="_blank"><img src="images/ico_yt.png" alt="YT"/></a>
	          <a href="https://twitter.com/Official_LVLZ" target="_blank"><img src="images/ico_tw.png" alt="TW"/></a>
	          <a href="https://www.instagram.com/official_lvlz8_" target="_blank"><img src="images/ico_insta.png" alt="IG"/></a>
	          <a href="https://www.facebook.com/lvlz8" target="_blank"><img src="images/ico_fb.png" alt="FB"/></a>
	          <a href="http://channels.vlive.tv/FB183" target="_blank"><img src="images/ico_vapp.png" alt="VLive"/></a>
	        </div>
      	</div>

ReactDOM.render(footer, document.getElementById('footer'));

const sidenav = 
		<div >
		  <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>x</a>
		  <a href="index.html">About</a>
		  <a href="lvlz-member.html">Members</a>
		  <a href="lvlz-discography.html">Discography</a>
		  <a href="lvlz-video.html">Video</a>
		  <a href="lvlz-gallery.html">Gallery</a>
		  <a href="lvlz-lyric.html">Lyric</a>
		  <a href="lvlz-calendar.html">Calendar</a>	  
		</div>

ReactDOM.render(sidenav, document.getElementById('sidenav'));

function openNav() {
		  document.getElementById("sidenav").style.width = "250px";
		  document.getElementById("main").style.marginLeft = "250px";
		}

function closeNav() {
		  document.getElementById("sidenav").style.width = "0";
		  document.getElementById("main").style.marginLeft= "0";
		}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex+= n);
}

function currentSlides(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

var acc = document.getElementsByClassName("accordion");
		var i;

		for (i = 0; i < acc.length; i++) {
		  acc[i].addEventListener("click", function() {
		    this.classList.toggle("active");
		    var panel = this.nextElementSibling;
		    if (panel.style.maxHeight) {
		      panel.style.maxHeight = null;
		    } else {
		      panel.style.maxHeight = panel.scrollHeight + "px";
		    } 
		  });
		}

function accordion(acc) {
			  	var panel = acc.nextElementSibling;
			    if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
				} else {
					panel.style.maxHeight = panel.scrollHeight + "px";
				}
			}