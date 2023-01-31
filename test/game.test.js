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
});
