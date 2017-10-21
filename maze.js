var loser = null;
var i= 0;


window.onload = function() {
	document.getElementById("end").onmouseover = end;
	document.getElementById("start").onclick = startGame;
	var boundary = document.querySelectorAll("div#maze div.boundary");
	for(i = 0; i < boundary.length; i++) {
		boundary[i].onmouseover = endGame;
	}
};


function endGame(event) {
	if(loser === false) {
		loser = true;
		var lose = document.getElementById("status");
		var boundary = document.querySelectorAll("div#maze div.boundary");
		for (var i = 0; i < boundary.length; i++) {
			 boundary[i].classList.add("youlose");
		}
	}
}


function startGame() {
		document.getElementById("status").textContent = "MAKE IT TO THE END";
		loser = false;
		var boundary = document.querySelectorAll("div#maze div.boundary");
		for(i = 0; i < boundary.length; i++) {
			boundary[i].classList.remove("youlose");
		}
}


function end() {
	if(loser === false) {
		document.getElementById("status").textContent = "YOU WON!!!  ";
	}
}