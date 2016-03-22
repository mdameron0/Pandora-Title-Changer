// ==UserScript==

// @name Change pandora title to song name.

// @namespace Kalthose.pandora

// @grant none

// @description See @name

// @version 2.1

// @include http://www.pandora.com/*

// @downloadURL https://github.com/Kalthose/Pandora-Title-Changer/raw/master/Pandora-title-changer.user.js

// @updateURL  https://github.com/Kalthose/Pandora-Title-Changer/raw/master/Pandora-title-changer.meta.js
// ==/UserScript==

//main function that will run at set intervals
function main (){
	//variables are grabbed once the main function is initiated, this allows for the variables to change every time the interval is checked.
	//grabs the appropriate HTML node for getting the active song name
	var songName = document.getElementsByClassName("songTitle");
	//grabs the appropriate HTML node for getting the active artist name
	var artistName = document.getElementsByClassName("artistSummary");
	//grabs the <title> node that will display at the top of the browser/tab
	var title = document.getElementsByTagName('title');

	//checks if the title node is set already to the active song
	if (title[0].innerHTML != songName[0].innerHTML + " by " + artistName[0].innerHTML){
		//if it isnt then this replaces the text in title with the currently active data
		title[0].innerHTML = songName[0].innerHTML + " by " + artistName[0].innerHTML;
	} 
}


var set = setInterval(function () { main()}, 150); 
