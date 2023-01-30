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
});
