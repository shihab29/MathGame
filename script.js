var playing = false;
var score;
var action;
var timeRemaining;
var num1, num2, correctAns, correctPlaceholder;
var position = [];
var i;
var answer;

document.getElementById('startReset').onclick = function() {
	if(playing == true) {
		location.reload();
	}
	else {
		playing = true;
		score = 0;
		timeRemaining = 60;

		hide('gameOver');
		document.getElementById('timeRemainingValue').innerHTML = timeRemaining;

		document.getElementById('scoreValue').innerHTML = score;
		document.getElementById('startReset').innerHTML = "Reset Game";
		show('timeRemaining');
		
		startCountdown();
		generateQA();
		check();
	}
}

function startCountdown() {
	action = setInterval(function() {
		timeRemaining -= 1;
		document.getElementById('timeRemainingValue').innerHTML = timeRemaining;

		if(timeRemaining <= 0) {
			stop();
			hide('timeRemaining');
			show('gameOver');
			document.getElementById('gameOver').innerHTML = "<p>Game Over!</p><p>your score is: "+ score +"</p>"
			hide('correct');
			hide('wrong');
			document.getElementById('startReset').innerHTML = "Start Game";
			playing = false;
		}
	}, 1000);
}

function stop() {
	clearInterval(action);
}

function generateQA() {
	num1 = Math.round(Math.random()*10);
	num2 = Math.round(Math.random()*10);
	correctAns = num1 * num2;
	correctPlaceholder = Math.round(Math.random() * 3);
	// console.log(num1);
	// console.log(num2);
	// console.log(correctAns);
	// console.log(correctPlaceholder);
	for(i=0; i<4; i++) {
		var x = Math.round(Math.random()*10) * Math.round(Math.random()*10);
		if(x!=correctAns)
			position[i] = x;
		else
			position[i] = Math.round(Math.random()*10) * Math.round(Math.random()*10);
	}
	position[correctPlaceholder] = correctAns;

	// console.log(position);
	document.getElementById('question').innerHTML = num1 + '*' + num2;
	document.getElementById('box1').innerHTML = position[0];
	document.getElementById('box2').innerHTML = position[1];
	document.getElementById('box3').innerHTML = position[2];
	document.getElementById('box4').innerHTML = position[3];
}

function check() {
	document.getElementById('box1').onclick = function() {
		if(correctPlaceholder == 0) {
			giveCorrectAns();
		}
		else {
			giveWrongAns();
		}
	}
	document.getElementById('box2').onclick = function() {
		if(correctPlaceholder == 1) {
			giveCorrectAns();
		}
		else {
			giveWrongAns();
		}
	}
	document.getElementById('box3').onclick = function() {
		if(correctPlaceholder == 2) {
			giveCorrectAns();
		}
		else {
			giveWrongAns();
		}
	}
	document.getElementById('box4').onclick = function() {
		if(correctPlaceholder == 3) {
			giveCorrectAns();
		}
		else {
			giveWrongAns();
		}
	}
}

function giveCorrectAns() {
	answer = true;
	hide('wrong');
	show('correct');
	setTimeout(function() {
		hide('correct');
	}, 1000);
	generateQA();
	score++;
	document.getElementById('scoreValue').innerHTML = score;
}

function giveWrongAns() {
	answer = false;
	hide('correct');
	show('wrong');
	setTimeout(function() {
		hide('wrong');
	}, 1000);
}

function hide(id) {
	document.getElementById(id).style.display = "none";
}

function show(id) {
	document.getElementById(id).style.display = "block";
}



//hello world
//checking