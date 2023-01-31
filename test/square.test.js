const Square = require("../src/square");

describe("The Square bomb status", () => {
  it("a square's bomb status should be knowable", () => {
    const square = new Square();
    square.isBomb = true;
    expect(square.isBomb).toBe(true);
  });
});

describe("An unclicked Square", () => {
  it("an unclicked square should display as a blank space", () => {
    const square = new Square();
    expect(square.draw()).toBe(" ");
  });

  it("can be clicked", () => {
    const square = new Square();
    square.click();
    expect(square.isClicked).toBe(true);
  });
});

describe("A clicked square", () => {
  it("a clicked square can be directed to display a number, representing the number of bombs around it", () => {
    const square = new Square();
    expect(square.draw(3)).toBe("3");
  });

  it("a clicked bomb shows an 'X'", () => {
    const square = new Square();
    square.isBomb = true;
    expect(square.draw()).toBe("X");
  });
});
