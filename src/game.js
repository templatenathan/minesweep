/*global console*/
const Board = require("./board");

class Game {
  constructor() {
    this.board = new Board(3);
  }

  start() {
    this.board.draw();
    console.log("Game created");
    this.board.squares.forEach((row) => {
      row.forEach((square) => (square.isClicked = true));
    });
    console.log("the land is cleared! GOOD JOB!");
  }

  move(rowIndex, columnIndex) {
    this.board.squares[rowIndex][columnIndex].isClicked = true;
    this.board.draw();
    console.log("'0' bombs around your square");
  }
}

module.exports = Game;
