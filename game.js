class Game {
  constructor(player1, player2) {
    this.players = [player1, player2];
    this.turn = 1;
    this.points = 0;
    this.gameBoard = new Array(9).fill(null);
  }
}
