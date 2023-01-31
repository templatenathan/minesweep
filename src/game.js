const Board = require("./board");

class Game {
  constructor() {
    this.board = new Board(3);
  }

  start() {
    this.board.draw();
  }
}

module.exports = Game;
