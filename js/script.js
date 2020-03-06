let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener('click', function(){
    playGame(1);
});
paperBtn.addEventListener('click', function(){
    playGame(2);
});
scissorsBtn.addEventListener('click', function(){
    playGame(3);
});