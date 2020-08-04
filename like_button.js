'use strict';

var jsx = React.createElement(
		"div",
		{ "class": "footer" },
		React.createElement("img", { src: "images/lvlz/woollim_logo.png", alt: "Woollim", "class": "woollim-logo" }),
		React.createElement(
				"div",
				{ "class": "snsicon" },
				React.createElement(
						"a",
						{ href: "http://lvlz8.com/", target: "_blank" },
						React.createElement("img", { src: "images/ico_art_home.png", alt: "Homepage" })
				),
				React.createElement(
						"a",
						{ href: "http://www.youtube.com/lvlz8", target: "_blank" },
						React.createElement("img", { src: "images/ico_yt.png", alt: "YT" })
				),
				React.createElement(
						"a",
						{ href: "https://twitter.com/Official_LVLZ", target: "_blank" },
						React.createElement("img", { src: "images/ico_tw.png", alt: "TW" })
				),
				React.createElement(
						"a",
						{ href: "https://www.instagram.com/official_lvlz8_", target: "_blank" },
						React.createElement("img", { src: "images/ico_insta.png", alt: "IG" })
				),
				React.createElement(
						"a",
						{ href: "https://www.facebook.com/lvlz8", target: "_blank" },
						React.createElement("img", { src: "images/ico_fb.png", alt: "FB" })
				),
				React.createElement(
						"a",
						{ href: "http://channels.vlive.tv/FB183", target: "_blank" },
						React.createElement("img", { src: "images/ico_vapp.png", alt: "VLive" })
				)
		)
);

var domContainer = document.getElementById('footer');
ReactDOM.render(jsx, domContainer);

document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
		document.getElementById('test').innerHTML = "asds";
		alert("HAHAHAH");
}