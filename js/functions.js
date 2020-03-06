function printMessage(msg){
	// Stworzenie diva dla naszego tekstu
	let div = document.createElement('div');
	// Przypisanie divowi zawartości msg
	div.innerHTML = msg;
	// Przypisanie diva jako dziecko elementu o id 'message'
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function setValue(moveId){
	console.log('setValue działa', moveId);
	if(moveId == 1){
		console.log('kamień', moveId);
		return 'kamień';
	} else if(moveId == 2){
		console.log('papier', moveId);
		return 'papier';
	} else if(moveId == 3){
		console.log('nożyce', moveId);
		return 'nożyce';
	} else{
		console.log('Unknown', moveId);
		printMessage('Nie znam ruchu o id ' + moveId + '.');
		return 'Nieznany ruch';
	}
}

function showResult(argComputerMove, argPlayerMove){
	if(argComputerMove == argPlayerMove){
		printMessage('Remis');
	} else if((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
		printMessage('Wygrałeś!');
	} else if(argPlayerMove == 'Nieznany ruch'){
		printMessage('Brak rozstrzygnięcia');
	} else{
		printMessage('Przegrałeś :(');
	}
}

function playGame(argPlayer){
	clearMessages();
    let calcMove = Math.floor((Math.random()*3)+1);
	let computerMove = setValue(calcMove);
	let playerInput = argPlayer;
	let playerMove = setValue(playerInput);

    showResult(computerMove, playerMove);
}