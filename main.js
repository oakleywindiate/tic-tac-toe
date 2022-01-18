
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

/* -------- VARIABLES --------*/


/* -------- FUNCTIONS --------*/

function setEmoji(e) {
  var boardID = e.target.id - 1;
  var currentPlayer = game.players[game.turn -1]

  if (game.gameBoard[boardID] === null) {
    game.gameplay(boardID, currentPlayer)
    e.target.classList += ` ${currentPlayer.emoji}`;
  }
}
