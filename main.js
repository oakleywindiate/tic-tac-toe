
/* -------- VARIABLES --------*/

var player1 = new Player(1, 'monster');
var player2 = new Player(2, 'spaceship');

var game = new Game(player1, player2);


/* -------- QUERY SELECTORS --------*/

var allGameSquares = document.getElementById('allGameSquares');

/* -------- EVENT LISTENERS --------*/

allGameSquares.addEventListener('click', function(e) {
  setEmoji(e);
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
