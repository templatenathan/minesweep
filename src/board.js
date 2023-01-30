/*global console*/
const Square = require("../src/square");
class Board {
  constructor(size) {
    this.size = size;
    this.squares = [];
    for (let rowIndex = 0; rowIndex < this.size; rowIndex++) {
      const row = [];
      for (let columnIndex = 0; columnIndex < this.size; columnIndex++) {
        row.push(new Square());
      }
      this.squares.push(row);
    }
  }

  draw() {
    for (let rowIndex = 0; rowIndex < this.size; rowIndex++) {
      const row = [];
      for (let columnIndex = 0; columnIndex < this.size; columnIndex++) {
        const square = this.squares[rowIndex][columnIndex];
        if (square.isClicked) {
          row.push(square.draw(0));
        } else {
          row.push(square.draw());
        }
      }
      console.log("|" + row.join("|") + "|");
    }
  }
}

module.exports = Board;
