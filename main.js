let randNumber = Math.floor(Math.random() *100) + 1;

const guesses = document.querySelector('#guesses');
const currentResult = document.querySelector('#currentResult');
const lowOrHigh = document.querySelector('#lowOrHigh');

const guessSubmit = document.querySelector('#guessSubmit');
const myInput = document.querySelector('#myInput');

const resultCard = document.querySelector('#result-card');

resultCard.style.visibility = "hidden";

let guessCount = 1;

myInput.focus();

let resetButton;

function checkGuess() {
	resultCard.style.visibility = "visible";
	
	let userGuess = Number(myInput.value);
	
	if (guessCount === 1) {
		guesses.textContent = "Previous guesses: ";
	}
	guesses.textContent += userGuess + " ";
	
	if (userGuess === randNumber) {
		currentResult.textContent = "Congrats! You got it right.";
		currentResult.style.backgroundColor = "green";
		lowOrHigh.textContent = "";
		setGameOver();
	}
	
	else if (guessCount === 10) {
		currentResult.textContent = "!!! Game-Over !!!";
		setGameOver();
	}
	
	else {
		currentResult.textContent = "Wrong!";
		currentResult.style.backgroundColor = "red";
		
		if (userGuess < randNumber) {
			lowOrHigh.textContent = "Last guess was quite low";
		}
		else if (userGuess > randNumber) {
			lowOrHigh.textContent = "Last guess was quite high";
		}
	}
	
	guessCount++;
	myInput.value = "";
	myInput.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
	myInput.disabled = true;
	guessSubmit.disabled = true;
	
	resetButton = document.createElement('button');
	resetButton.textContent = "Start new game";
	document.querySelector('#result-card').appendChild(resetButton);
	
	resetButton.addEventListener('click', resetGame);
}

function resetGame() {
	guessCount = 1;
	
	const resultCardElements = document.querySelectorAll('#result-card p');
	
	for(var i=0; i<resultCardElements.length; i++) {
		resultCardElements[i].textContent = "";
	}
	
	resetButton.parentNode.removeChild(resetButton);
	
	resultCard.style.visibility = "hidden";
	
	myInput.disabled = false;
	guessSubmit.disabled = false;
	
	myInput.value = "";
	myInput.focus();
	
	currentResult.style.backgroundColor = "white";
	
	randNumber = Math.floor(Math.random() *100) + 1;
}
