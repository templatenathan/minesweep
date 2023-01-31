/*global console*/
const Board = require("./board");

class Game {
  constructor() {
    this.board = new Board(3);
  }

  start() {
    this.board.draw();
    console.log("Game created");
  }

  move(rowIndex, columnIndex) {
    this.board.squares[rowIndex][columnIndex].isClicked = true;
  }
}

module.exports = Game;
