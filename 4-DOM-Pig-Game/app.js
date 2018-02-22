/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

function newGame() {
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
}

function rollDice(){
    var pictures = ['dice-1.png', 'dice-2.png', 'dice-3.png', 'dice-4.png', 'dice-4.png', 'dice-5.png', 'dice-6.png'];
   var dice = document.getElementById('dice');
    document.querySelector('.dice').style.display = 'block';

    var rollingDice = Math.floor(Math.random()*6)+1;
    console.log(rollingDice);

    document.dice.src=pictures[rollingDice-1];
    console.log(pictures[rollingDice]);
    // dice.querySelector('.dice')
}