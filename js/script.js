let calcMove = Math.floor((Math.random()*3)+1);
let playerInput = prompt('Wybierz ruch! 1 - kamień, 2 - papier, 3 - nożyce');

console.log('Wyliczenie wartości');

let computerMove = setValue(calcMove);
let playerMove = setValue(playerInput);

console.log('Sprawdzenie przypisania wartości:');
console.log(computerMove);
console.log(playerMove);

/*
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

*/

showResult(computerMove, playerMove);

console.log('Sprawdzenie dla wszystkich możliwości');
console.log(setValue(1));
console.log(setValue(2));
console.log(setValue(3));
console.log(setValue(4));