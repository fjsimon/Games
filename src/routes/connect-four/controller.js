import {Cell} from './cell';
import * as constant from './constant';

export class Controller {

  scores = 100000;

  place(board, column, val) {
    if (this.score(board) != this.scores && this.score(board) != -this.scores && !this.isFull(board)) {
      for (let i = constant.ROW - 1; i >= 0; i--) {
        if (board[i][column].color === constant.WHITE) {
            board[i][column].color = val;
            return true;
        }
      }
    }
    return false;
  }

  isFull(board) {
    for (let i = 0; i < constant.COL; i++) {
      if (board[0][i].color === constant.WHITE) {
          return false;
      }
    }
    return true;
  }

  isFinished(board, depth, score) {
    if (depth === 0 || score === this.scores || score === -this.scores || this.isFull(board)) {
        return true;
    }
    return false;
  }

  scorePosition(board, row, column, delta_y, delta_x) {
    var human_points = 0;
    var computer_points = 0;

    // Determine score through amount of available chips
    for (var i = 0; i < 4; i++) {
        if (board[row][column].color === constant.RED) {
            human_points++; // Add for each human chip
        } else if (board[row][column].color === constant.YELLOW) {
            computer_points++; // Add for each computer chip
        }

        // Moving through our board
        row += delta_y;
        column += delta_x;
    }

    // Marking winning/returning score
    if (human_points === 4) {
        return -this.scores;
    } else if (computer_points === 4) {
        return this.scores;
    } else {
        // Return normal points
        return computer_points;
    }
  }

  score(board) {
      var points = 0;

      var vertical_points = 0;
      var horizontal_points = 0;
      var diagonal_points1 = 0;
      var diagonal_points2 = 0;

      // Vertical points
      // Check each column for vertical score
      //
      // Possible situations
      //  0  1  2  3  4  5  6
      // [x][ ][ ][ ][ ][ ][ ] 0
      // [x][x][ ][ ][ ][ ][ ] 1
      // [x][x][x][ ][ ][ ][ ] 2
      // [x][x][x][ ][ ][ ][ ] 3
      // [ ][x][x][ ][ ][ ][ ] 4
      // [ ][ ][x][ ][ ][ ][ ] 5
      for (var row = 0; row < constant.ROW - 3; row++) {
          for (var column = 0; column < constant.COL; column++) {
              var score = this.scorePosition(board, row, column, 1, 0);
              if (score === this.scores) return this.scores;
              if (score === -this.scores) return -this.scores;
              vertical_points += score;
          }
      }

      // Horizontal points
      // Check each row's score
      //
      // Possible situations
      //  0  1  2  3  4  5  6
      // [x][x][x][x][ ][ ][ ] 0
      // [ ][x][x][x][x][ ][ ] 1
      // [ ][ ][x][x][x][x][ ] 2
      // [ ][ ][ ][x][x][x][x] 3
      // [ ][ ][ ][ ][ ][ ][ ] 4
      // [ ][ ][ ][ ][ ][ ][ ] 5
      for (var row = 0; row < constant.ROW; row++) {
          for (var column = 0; column < constant.COL - 3; column++) {
              var score = this.scorePosition(board, row, column, 0, 1);
              if (score === this.scores) return this.scores;
              if (score === -this.scores) return -this.scores;
              horizontal_points += score;
          }
      }

      // Diagonal points 1 (left-bottom)
      //
      // Possible situation
      //  0  1  2  3  4  5  6
      // [x][ ][ ][ ][ ][ ][ ] 0
      // [ ][x][ ][ ][ ][ ][ ] 1
      // [ ][ ][x][ ][ ][ ][ ] 2
      // [ ][ ][ ][x][ ][ ][ ] 3
      // [ ][ ][ ][ ][ ][ ][ ] 4
      // [ ][ ][ ][ ][ ][ ][ ] 5
      for (var row = 0; row < constant.ROW - 3; row++) {
          for (var column = 0; column < constant.COL - 3; column++) {
              var score = this.scorePosition(board, row, column, 1, 1);
              if (score === this.scores) return this.scores;
              if (score === -this.scores) return -this.scores;
              diagonal_points1 += score;
          }
      }

      // Diagonal points 2 (right-bottom)
      //
      // Possible situation
      //  0  1  2  3  4  5  6
      // [ ][ ][ ][x][ ][ ][ ] 0
      // [ ][ ][x][ ][ ][ ][ ] 1
      // [ ][x][ ][ ][ ][ ][ ] 2
      // [x][ ][ ][ ][ ][ ][ ] 3
      // [ ][ ][ ][ ][ ][ ][ ] 4
      // [ ][ ][ ][ ][ ][ ][ ] 5
      for (var row = 3; row < constant.ROW; row++) {
          for (var column = 0; column <= constant.COL - 4; column++) {
              var score = this.scorePosition(board, row, column, -1, +1);
              if (score === this.scores) return this.scores;
              if (score === -this.scores) return -this.scores;
              diagonal_points2 += score;
          }

      }

      points = horizontal_points + vertical_points + diagonal_points1 + diagonal_points2;
      return points;
  }

  generateComputerDecision(board, depth) {

    if (this.score(board) !== this.scores && this.score(board) !== -this.scores && !this.isFull(board)) {
      let ai_move = this.maximizePlay(board, depth);
      return ai_move[0];
    }
  }

  maximizePlay(board, depth) {

    let score = this.score(board);
    if (this.isFinished(board, depth, score)) return [null, score];
    let max = [null, -99999];

    for (let column = 0; column < constant.COL; column++) {
        let new_board = this.copy(board);
        if (this.place(new_board, column, constant.YELLOW)) {

            let next_move = this.minimizePlay(new_board, depth - 1);
            if (max[0] === null || next_move[1] >= max[1]) {
                max[0] = column;
                max[1] = next_move[1];
            }
        }
    }
    return max;
  }

  minimizePlay(board, depth) {

    let score = this.score(board);
    if (this.isFinished(board, depth, score)) return [null, score];
    let min = [null, 99999];

    for (var column = 0; column < constant.COL; column++) {
        let new_board = this.copy(board);
        if (this.place(new_board, column, constant.RED)) {
          this.iterations++;
          let next_move = this.maximizePlay(new_board, depth - 1);
          if (min[0] === null || next_move[1] <= min[1]) {
              min[0] = column;
              min[1] = next_move[1];
          }
        }
    }
    return min;
  }

  copy(board) {
    let newboard = [];
    for(let i = 0; i < constant.ROW; i++) {
      let row = [];
      for(let j = 0; j < constant.COL; j++) {
          row.push(new Cell(board[i][j].value, i, j, board[i][j].color));
      }
      newboard.push(row);
    }
    return newboard
  }
}
