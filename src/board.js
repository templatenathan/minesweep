/*global console*/
class Board {
  constructor(size) {
    this.size = size;
  }

  draw() {
    const spaces = [];
    for (let i = 0; i < this.size; i++) {
      spaces.push(" ");
    }
    console.log("|" + spaces.join("|") + "|");
  }
}

module.exports = Board;
