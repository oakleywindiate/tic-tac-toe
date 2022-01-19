
/* -------- VARIABLES --------*/

var player1 = new Player(1, 'monster');
var player2 = new Player(2, 'spaceship');

var game = new Game(player1, player2);


var combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/* -------- QUERY SELECTORS --------*/

var allGameSquares = document.getElementById('allGameSquares');
var winnerBanner = document.querySelector('.outcome-banner');
var square = document.getElementById('square');

/* -------- EVENT LISTENERS --------*/

allGameSquares.addEventListener('click', function(e) {
  setEmoji(e);
  determineWin(e);
});

/* -------- FUNCTIONS --------*/

function setEmoji(e) {
  var boardIndex = e.target.id - 1;
  var currentPlayerIndex = game.turn - 1;
  var currentPlayer = game.players[currentPlayerIndex];
  if (game.gameBoard[boardIndex] === null) {
    game.gameplay(boardIndex, currentPlayer)
    e.target.classList += ` ${currentPlayer.emoji}`;
  }
}

function determineWin() {
  if (game.win() === true && game.players[0] === player1) {
    winnerBanner.innerHTML += `PLAYER 1 WINS!`
  } else {
  if(game.win() === true && game.players[1] === player2) {
      winnerBanner.innerHTML += `PLAYER 2 WINS!`
    }
  }
}
