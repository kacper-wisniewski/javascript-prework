let computerMove = '';
let playerMove = 'Nieznany ruch';
let calcMove = Math.floor((Math.random()*3)+1);
let playerInput = prompt('Wybierz ruch! 1 - kamień, 2 - papier, 3 - nożyce');

if(playerInput == '1'){
    playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove = "papier";
} else if(playerInput == '3'){
    playerMove = "nożyce";
}

if(calcMove == 1){
    computerMove = 'kamień';
} else if(calcMove == 2){
    computerMove = 'papier';
} else if(calcMove = 3){
    computerMove = 'nożyce';
}

if((computerMove == 'kamień' && playerMove == 'papier') || (computerMove == 'papier' && playerMove == 'nożyce') || (computerMove == 'nożyce' && playerMove == 'kamień')){
    printMessage('Wygrałeś!');
} else if(computerMove == playerMove){
    printMessage('Remis!');
} else if (playerMove == 'Nieznany ruch'){
    printMessage('Wykonałeś nieznany ruch.');
} else{
    printMessage('Komputer wygrał :(');
}
printMessage('');
printMessage('Sprawdzenie:');
printMessage('computerMove: ' + computerMove);
printMessage('playerMove: ' + playerMove);