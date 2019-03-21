let randNumber = Math.floor(Math.random() *100) + 1;

console.log(randNumber);

const guesses = document.querySelector('#guesses');
const currentResult = document.querySelector('#currentResult');
const lowOrHigh = document.querySelector('#lowOrHigh');

const guessSubmit = document.querySelector('#guessSubmit');
const myInput = document.querySelector('#myInput');

let guessCount = 1;
let resetButton;

function checkGuess() {
	let userGuess = Number(myInput.value);
	
	if (guessCount === 1) {
		guesses.textContent = "Previous guesses: ";
	}
	guesses.textContent += userGuess + " ";
	
	if (userGuess === randNumber) {
		currentResult.textContent = "Congrats! You got it right.";
		currentResult.style.backgroundColor = "green";
		lowOrHigh.textContent = "";
		//setGameOver();
	}
	
	else if (guessCount === 10) {
		currentResult.textContent = "!!! Game-Over !!!";
		//setGameOver();
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
