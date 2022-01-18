class Game {
  constructor(player1, player2) {
    this.players = [player1, player2];
    this.turn = 1;
    this.points = 0;
    this.gameBoard = new Array(9).fill(null);
  }
  gameplay(id, player) {
    if (this.turn === 1) {
      this.turn = 2;
    } else {
      this.turn = 1;
    }
      this.gameBoard[id] = player.emoji;
  }
}
