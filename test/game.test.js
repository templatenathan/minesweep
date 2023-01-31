const Game = require("../src/game");

describe("The start of the game", () => {
  it("the board should be drawn", () => {
    const game = new Game();
    const mockDraw = jest.fn();
    game.board.draw = mockDraw;
    game.start();
    expect(mockDraw).toBeCalled();
  });
});
