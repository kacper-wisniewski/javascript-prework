{
    const easyBtn = document.getElementById('easy'),
        mediumBtn = document.getElementById('medium'),
        hardBtn = document.getElementById('hard'),
        rockBtn = document.getElementById('rock'),
        paperBtn = document.getElementById('paper'),
        scissorsBtn = document.getElementById('scissors');
    let luckCoefficient = 75;

    easyBtn.addEventListener('click', function() {
        console.log('Set luck to 75%');
        luckCoefficient = 75;
        console.log(luckCoefficient);
    })
    mediumBtn.addEventListener('click', function() {
        console.log('Set luck to 50%');
        luckCoefficient = 50;
        console.log(luckCoefficient);
    })
    hardBtn.addEventListener('click', function() {
        console.log('Set luck to 33.33%');
        luckCoefficient = 33.33;
        console.log(luckCoefficient);
    })

    rockBtn.addEventListener('click', function() {
        playGame(1, luckCoefficient);
    });
    paperBtn.addEventListener('click', function() {
        playGame(2, luckCoefficient);
    });
    scissorsBtn.addEventListener('click', function() {
        playGame(3, luckCoefficient);
    });
}