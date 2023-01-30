/*global console*/
const Board = require("../src/board");

describe("Clicking a Square", () => {
  it("clicking a square that is not a bomb and not surrounded by bombs causes it to be drawn as '0'", () => {
    const consoleMock = jest.fn();
    console.log = consoleMock;
    const board = new Board(1);
    board.squares[0][0].click();
    board.draw();
    expect(consoleMock.mock.calls[0][0]).toBe("|0|");
  });
});

describe("Drawing a 3x3 board", () => {
  it("The first row shows three spaces separated by |", () => {
    const consoleMock = jest.fn();
    console.log = consoleMock;
    const board = new Board(3);
    board.draw();
    expect(consoleMock.mock.calls[0][0]).toBe("| | | |");
  });
});

describe("Drawing a 5x5 board", () => {
  it("The first row shows five spaces separated by |", () => {
    const consoleMock = jest.fn();
    console.log = consoleMock;
    const board = new Board(5);
    board.draw();
    expect(consoleMock.mock.calls[0][0]).toBe("| | | | | |");
  });
});
