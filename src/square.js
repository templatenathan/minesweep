const EMPTY_SPACE = " ";
const BOMB = "X";

class Square {
  draw(optionalNumber) {
    if (Number.isInteger(optionalNumber)) {
      return optionalNumber.toString();
    }
    if (this.isBomb) {
      return BOMB;
    }
    return EMPTY_SPACE;
  }

  click() {
    this.isClicked = true;
  }
}

module.exports = Square;
