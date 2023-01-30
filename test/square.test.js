const Square = require("../src/square");

describe("The Square bomb status", () => {
  it("a square's bomb status should be knowable", () => {
    const square = new Square();
    square.isBomb = true;
    expect(square.isBomb).toBe(true);
  });
});
