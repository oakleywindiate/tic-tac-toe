
/* -------- VARIABLES --------*/

var player1 = new Player(1, 'monster');
var player2 = new Player(2, 'spaceship');

var game = new Game(player1, player2);

/* -------- QUERY SELECTORS --------*/

var allGameSquares = document.getElementById('allGameSquares');
var winnerBanner = document.querySelector('.outcome-banner');
var square = document.getElementById('square');
var playerOneScore = document.getElementById('playerOneScore');
var playerTwoScore = document.getElementById('playerTwoScore');

/* -------- EVENT LISTENERS --------*/

allGameSquares.addEventListener('click', function(e) {
  setEmoji(e);
  determineWin();
  determineDraw();
  game.counter++
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
  if (game.players[0].emoji === 'monster' && game.win() === true) {
    winnerBanner.replaceChildren();
    winnerBanner.innerHTML += `PLAYER 1 WINS!`
    player1.playerOneWin++
    updateWin()
  } else if
    (game.players[1].emoji === 'spaceship' && game.win() === true) {
      winnerBanner.replaceChildren();
      winnerBanner.innerHTML += `PLAYER 2 WINS!`
      player2.playerTwoWin++
      updateWin();
    }
    return;
  }


function determineDraw() {
  if (game.counter === 8 && game.win() === false) {
  winnerBanner.innerHTML += `DRAW!`;
  }
}

function updateWin() {
  playerOneScore.replaceChildren();
  playerOneScore.innerHTML += `${player1.playerOneWin}`;

}
