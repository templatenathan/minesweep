/*global console*/
const Game = require("../src/game");

describe("The start of the game", () => {
  it("the board should be drawn", () => {
    const game = new Game();
    const mockDraw = jest.fn();
    game.board.draw = mockDraw;
    game.start();
    expect(mockDraw).toBeCalled();
  });

  it("the message, 'Game created' should appear after the board is drawn", () => {
    const game = new Game();
    const mockConsoleLog = jest.fn();
    console.log = mockConsoleLog;
    game.start();
    expect(mockConsoleLog).toHaveBeenCalledWith("Game created");
  });

  it("moves keep on being made until the board is all cleared", () => {
    const game = new Game();
    game.start();
    game.board.squares.forEach((row) => {
      row.forEach((square) => expect(square.isClicked).toBeTruthy());
    });
  });
});

describe("Upon winning the game", () => {
  it("the message 'the land is cleared! GOOD JOB!' should be shown", () => {
    const mockConsoleLog = jest.fn();
    console.log = mockConsoleLog;
    const game = new Game();
    game.start();
    expect(mockConsoleLog).toHaveBeenCalledWith(
      "the land is cleared! GOOD JOB!"
    );
  });
});

describe("A move is made", () => {
  it("the selected square should be clicked", () => {
    const game = new Game();
    game.move(0, 0);
    expect(game.board.squares[0][0].isClicked).toBeTruthy();
  });

  it("the board should be drawn", () => {
    const game = new Game();
    const mockDraw = jest.fn();
    game.board.draw = mockDraw;
    game.move(0, 0);
    expect(mockDraw).toBeCalled();
  });

  it("the message, '0' bombs around your square' should be printed", () => {
    const game = new Game();
    const mockConsoleLog = jest.fn();
    console.log = mockConsoleLog;
    game.move(0, 0);
    expect(mockConsoleLog).toHaveBeenCalledWith("'0' bombs around your square");
  });
});
