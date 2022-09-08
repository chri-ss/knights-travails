const knightMoves = () => {
  const makeBoard = () => {
    const board = [];
    for (let i = 0; i < 8; i++) {
      board[i] = [];
      for (let j = 0; j < 8; j++) {
        board[i][j] = `[${i}, ${j}]`;
      }
    }
    return board;
  };

  const exists = (x, y) => {
    const board = makeBoard();
    return board[x][y];
  };

  const getLegalMoves = (x, y, board = makeBoard()) => {
    for (let i = 0; i < board.length; ++i) {
      board[i] = board[i].filter(
        (move) =>
          move === `[${x - 2}, ${y - 1}]` ||
          move === `[${x - 1}, ${y - 2}]` ||
          move === `[${x + 1}, ${y - 2}]` ||
          move === `[${x + 2}, ${y - 1}]` ||
          move === `[${x + 2}, ${y + 1}]` ||
          move === `[${x + 1}, ${y + 2}]` ||
          move === `[${x - 1}, ${y + 2}]` ||
          move === `[${x - 2}, ${y + 1}]`
      );
    }
    board = board.flat();
    return board;
  };

  const Node = (value) => {
    return { value };
  };

  const findRoot = (x, y) => {
    return Node({ [`[${x}, ${y}]`]: {} });
  };

  const buildTree = (x, y, target) => {
    let root = findRoot(x, y);
    let allMoves = getLegalMoves(x, y);
    for (let i = 0; i < allMoves.length; ++i) {
      root.value[`[${x}, ${y}]`][i] = allMoves[i];
      if (allMoves[i] === target) {
        return root;
      }
    }
    return root;
  };

  return { makeBoard, exists, getLegalMoves, buildTree };
};

const test = knightMoves();
console.log(test.makeBoard());
console.log(test.getLegalMoves(8, 8));
console.log(test.buildTree(3, 3, "[4, 1]"));
