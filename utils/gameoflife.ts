class GameOfLife {
  // ATTRIBUTES
  height: number;
  width: number;
  percentage: number;

  constructor(
    height: number = 10,
    width: number = 10,
    percentage: number = 0.5
  ) {
    this.height = height;
    this.width = width;
    this.percentage = percentage;
  }

  initBoard() {
    let board: number[][] = [];
    for (let i = 0; i < this.height; i++) {
      let row: number[] = [];
      for (let j = 0; j < this.width; j++) {
        row.push(Math.random() < this.percentage ? 1 : 0);
      }
      board.push(row);
    }
    return board;
  }

  next(board: number[][]) {
    let gol = new GameOfLife(this.height, this.width, 0);
    let next_board = gol.initBoard();
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        let n_count = this.checkNeighbhours(board, i, j);
        switch (n_count) {
          case 2:
            next_board[i][j] = board[i][j];
            break;
          case 3:
            next_board[i][j] = 1;
            break;
          default:
            next_board[i][j] = 0;
            break;
        }
      }
    }
    return next_board;
  }

  checkNeighbhours(board: number[][], row: number, col: number) {
    let count = 0;

    /*
    // old offset being an object containing all coordinates, switching to array of arrays
    const OFFSET = {
      0: [-1, -1],
      1: [-1, 0],
      2: [-1, +1],
      3: [0, -1],
      4: [0, +1],
      5: [+1, -1],
      6: [+1, 0],
      7: [+1, +1],
    };*/
    const b_OFFSET = [
      [-1, -1],
      [-1, 0],
      [-1, +1],
      [0, -1],
      [0, +1],
      [+1, -1],
      [+1, 0],
      [+1, +1],
    ];
    for (let off of b_OFFSET) {
      if (this.isCellValid(board, row + off[1], col + off[0])) {
        count++;
      }
    }
    return count;
  }

  isCellValid(board: number[][], row: number, col: number) {
    return (
      row >= 0 &&
      col >= 0 &&
      row < this.height &&
      col < this.width &&
      board[row][col]
    );
  }
}

export default GameOfLife;
