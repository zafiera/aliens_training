/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var determinePlayer = 0;
var activePlayer = 0

function newGame () {
  document.querySelector('.dice').style.display = 'none'

  document.getElementById('score-0').textContent = '0'
  document.getElementById('score-1').textContent = '0'
  document.getElementById('current-0').textContent = '0'
  document.getElementById('current-1').textContent = '0'
  document.getElementById('name-0').textContent = 'Player 1'
  document.getElementById('name-1').textContent = 'Player 2'
}

function rollDice () {
  var pictures = ['dice-1.png', 'dice-2.png', 'dice-3.png', 'dice-4.png',
    'dice-5.png', 'dice-6.png']
  var dice = document.getElementById('dice')

  document.querySelector('.dice').style.display = 'block'

  var rollingDice = Math.floor(Math.random() * 6)
  console.log(rollingDice + 1)

  document.dice.src = pictures[rollingDice]
  console.log(pictures[rollingDice])

  if (rollingDice >= 1) {
    var score = rollingDice + 1
    var getScore = parseInt(document.getElementById('current-' + activePlayer).textContent)
    var currentScore = score + getScore
    document.querySelector('#current-' + activePlayer).innerHTML = currentScore
    console.log(getScore)
  } else {
    document.querySelector('#current-' + activePlayer).innerHTML = '0'
    changePlayer()
  }
}

function changePlayer () {
    determinePlayer++
  if (determinePlayer % 2 == 0) {
    activePlayer = 0
  }else {
    activePlayer = 1
  }
  document.querySelector('.player-1-panel').classList.toggle('active')
  document.querySelector('.player-0-panel').classList.toggle('active')


    document.querySelector('#current-0').innerHTML = '0';
    document.querySelector('#current-1').innerHTML = '0';

    console.log('player' + activePlayer)

}

function hold () {
  var getSavedScore = parseInt(document.getElementById('score-' + activePlayer).textContent)
  var getScore = parseInt(document.getElementById('current-' + activePlayer).textContent)
  var score = document.getElementById('score-' + activePlayer)
  score.innerHTML = getScore+getSavedScore;
  changePlayer()
}
