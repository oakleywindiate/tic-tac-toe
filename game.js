class Game {
  constructor(player1, player2) {
    this.players = [player1, player2];
    this.turn = 1;
    this.points = 0;
    this.gameBoard = new Array(9).fill(null);
  }
  gameplay(index, player) {
    if (this.turn === 1) {
      this.turn = 2;
    } else {
      this.turn = 1;
    }
      this.gameBoard[index] = player.emoji;
  }
  win() {
    if((game.gameBoard[0] !== null && game.gameBoard[0] === game.gameBoard[1]
      && game.gameBoard[1] === game.gameBoard[2])) {
        return true;
      }
    if((game.gameBoard[3] !== null && game.gameBoard[3] === game.gameBoard[4]
      && game.gameBoard[4] === game.gameBoard[5])) {
        return true;
      }
    if((game.gameBoard[6] !== null && game.gameBoard[6] === game.gameBoard[7]
        && game.gameBoard[7] === game.gameBoard[8])) {
          return true;
      }
    if((game.gameBoard[0] !== null && game.gameBoard[0] === game.gameBoard[3]
      && game.gameBoard[3] === game.gameBoard[6])) {
        return true;
      }
    if((game.gameBoard[1] !== null && game.gameBoard[1] === game.gameBoard[4]
      && game.gameBoard[4] === game.gameBoard[7])) {
        return true;
      }
    if((game.gameBoard[2] !== null && game.gameBoard[2] === game.gameBoard[5]
      && game.gameBoard[5] === game.gameBoard[8])) {
        return true;
      }
    if((game.gameBoard[0] !== null && game.gameBoard[0] === game.gameBoard[4]
      && game.gameBoard[4] === game.gameBoard[8])) {
        return true;
      }
    if((game.gameBoard[2] !== null && game.gameBoard[2] === game.gameBoard[4]
      && game.gameBoard[4] === game.gameBoard[6])) {
        return true;
      } else {
        return false
      }
  }
}
