function printMessage(msg, target) {
	// Stworzenie diva dla naszego tekstu
	let div = document.createElement('div');
	// Przypisanie divowi zawartości msg
	div.innerHTML = msg;
	// Przypisanie diva jako dziecko elementu o id 'message'
	document.getElementById(target).appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

function setValue(moveId) {
	if(moveId == 1) {
		return 'rock';
	} else if(moveId == 2) {
		return 'paper';
	} else if(moveId == 3) {
		return 'scissors';
	} else {
		printMessage('Nie znam ruchu o id ' + moveId + '.');
		return 'Unknown';
	}
}

function whoWins(argLuckCoefficient, argPlayerMove) {

	let calcMove = Math.floor((Math.random() * 100) + 1);
	let playerMove = argPlayerMove;
	let luckCoefficient = argLuckCoefficient

	if(calcMove <= luckCoefficient) {
		console.log('Player Win');
		if(playerMove == 'rock') {
			return 'scissors';
		} else if(playerMove == 'paper') {
			return 'rock';
		} else {
			return 'scissors';
		}
	} else if(calcMove > luckCoefficient && calcMove < ((100 - luckCoefficient) / 2) + luckCoefficient) {
		console.log('Computer Win');
		if(playerMove == 'rock') {
			return 'paper';
		} else if(playerMove == 'paper') {
			return 'scisors';
		} else {
			return 'rock';
		}
	} else {
		console.log('Draw');
		return playerMove;
	}

}

function showResult(argComputerMove, argPlayerMove) {

	printMessage('<div class="result">You played ' + argPlayerMove + '</div>', 'messages');
	setTimeout(() => {
		clearMessages();
		printMessage('<div class="result">Computer played ' + argComputerMove + '</div>', 'messages');
		setTimeout(() => {
			clearMessages();
			if(argComputerMove == argPlayerMove) {
				printMessage('<div class="result draw">Draw</div>', 'messages');
			} else if((argComputerMove == 'rock' && argPlayerMove == 'paper') || (argComputerMove == 'paper' && argPlayerMove == 'scissors') || (argComputerMove == 'scissors' && argPlayerMove == 'rock')) {
				printMessage('<div class="result win">You Win</div>', 'messages');
			} else if(argPlayerMove == 'Unknown') {
				printMessage('<div class="result draw">You picked the wrong variable</div>', 'messages');
			} else {
				printMessage('<div class="result lose">You lose</div>', 'messages');
			}
			setTimeout(() => {
				clearMessages();
			}, 3000);
		}, 3000);
	}, 3000);
	
	
	
	
}

function playGame(argPlayer, argLuckCoefficient) {
	clearMessages();
	let playerInput = argPlayer;
	let playerMove = setValue(playerInput);
	let computerMove = whoWins(argLuckCoefficient, playerMove);

    showResult(computerMove, playerMove);
}