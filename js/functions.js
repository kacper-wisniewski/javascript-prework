function printMessage(msg, target) {
	// Stworzenie diva dla naszego tekstu
	let div = document.createElement('div');
	// Przypisanie divowi zawartości msg
	div.innerHTML = msg;
	div.classList.add('result')
	// Przypisanie diva jako dziecko elementu o id 'message'
	document.getElementById(target).appendChild(div);
}

function clearMessages(target) {
	document.getElementById(target).innerHTML = '';
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
	printMessage('You played ' + argPlayerMove, 'messages');
	console.log('showResult');
	setTimeout(() => {
		clearMessages('messages');
		printMessage('Computer played ' + argComputerMove, 'messages');
		setTimeout(() => {
			clearMessages('messages');
			let parent = document.getElementById('messages');
			if(argComputerMove == argPlayerMove) {
				parent.classList.add('draw');
				printMessage('Draw', 'messages');
			} else if((argComputerMove == 'rock' && argPlayerMove == 'paper') || (argComputerMove == 'paper' && argPlayerMove == 'scissors') || (argComputerMove == 'scissors' && argPlayerMove == 'rock')) {
				parent.classList.add('win');
				printMessage('You Win', 'messages');
				clearMessages('player');
				argPlayerScore++;
				printMessage(argplayerScore, 'player');
			} else if(argPlayerMove == 'Unknown') {
				parent.classList.add('draw');
				printMessage('You picked the wrong variable', 'messages');
			} else {
				parent.classList.add('lose');
				printMessage('You lose', 'messages');
				clearMessages('computer');
				argComputerScore++;
				printMessage(argcomputerScore, 'computer');
			}
			
			setTimeout(() => {
				clearMessages('messages');
				document.getElementById('messages').className = "";
			}, 3000);
		}, 3000);
	}, 3000);
	
	
	
	
}

function playGame(argPlayer, argLuckCoefficient) {
	clearMessages('messages');
	let playerInput = argPlayer;
	let playerMove = setValue(playerInput);
	let computerMove = whoWins(argLuckCoefficient, playerMove);
    showResult(computerMove, playerMove);
}