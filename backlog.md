# Backlog

1.

As an observer of the game
I want to see the board printed out
So that I can understand the progress of the game

A.
✅
GIVEN an empty 3 by 3 board
WHEN it is drawn
THEN each space should be marked | |

B.
✅
GIVEN an empty 3 by 3 board
WHEN it is drawn
THEN each row should be separated

2.

As an observer of the game
I want to see Squares that can be hidden, flagged, a bomb, or clicked
So that I can understand the terrain of the board

A.
✅
GIVEN a Square
WHEN its on the board
THEN it can be a bomb or not

B.
✅
GIVEN a Square
WHEN its on the board
THEN it can be clicked, or unclicked

3.

As an observer of the game
I want the game to proceed automatically
So that I can watch it

A.
✅
GIVEN a game
WHEN it starts
THEN it is drawn with a message

GIVEN a game
WHEN a move is made
THEN the board is drawn with the message 'X bombs around your square.'
