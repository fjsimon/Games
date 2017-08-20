import {BindingEngine, inject, observable} from 'aurelia-framework';
import {Cell} from './cell';

@inject('StoreWrapper', BindingEngine)
export class EightQueens {

  heading = 'Eight Queens';

  N = 8;
  boardCell = [];
  board = [];
  row = 0;

  constructor(storeWrapper, bindingEngine, select) {

   this.store = storeWrapper.store;
   this.bindingEngine = bindingEngine;
  }

  attached() {

   this.unsubscribe = this.store.subscribe(() => {
     this.update();
   });
  }

  detached() {

   this.unsubscribe();
  }

  update() {

   let state = this.store.getState();
   console.log(state);
  }

  activate(){

    for(let i = 0; i < this.N; i++) {
      let row = [];
      for(let j = 0; j < this.N; j++) {
          row.push(new Cell(0));
      }
      this.boardCell.push(row);
    }
  }

  solveNQueens() {

//    if (this.solveNQUtil(this.boardCell, 0) === false) {
//      console.log("No solution");
//    }

    this.board = this.queenPuzzle(8,8);
  }

  nextSolution() {

    this.resetBoard();
    for(var i = 0; i < this.board[this.row].length; i++) {
      this.boardCell[i][this.board[this.row][i]].value = 1;
    }

    this.row++;
  }

  resetBoard() {
    for(let i = 0; i < this.N; i++) {
      for(let j = 0; j < this.N; j++) {
          this.boardCell[i][j].value = 0;
      }
    }
  }

  isSafe(board, row, col) {
    var i, j;

    /* Check this row on left side */
    for (i = 0; i < col; i++)
        if (board[row][i].value === 1)
            return false;

    /* Check upper diagonal on left side */
    for (i=row, j=col; i>=0 && j>=0; i--, j--)
        if (board[i][j].value === 1)
            return false;

    /* Check lower diagonal on left side */
    for (i=row, j=col; j>=0 && i < this.N; i++, j--)
        if (board[i][j].value === 1)
            return false;

    return true;
  }

  solveNQUtil(board, col) {

    /* base case: If all queens are placed then return true */
    if (col >= this.N) {
      return true;
    }

    /* Consider this column and try placing this queen in all rows one by one */
    for (var i = 0; i < this.N; i++) {

        /* Check if queen can be placed on board[i][col] */
        if (this.isSafe(board, i, col)) {

            /* Place this queen in board[i][col] */
            board[i][col].value = 1;

            /* recur to place rest of the queens */
            if (this.solveNQUtil(board, col + 1 ) === true) {
                return true;
            }

            /* If placing queen in board[i][col] doesn't lead to a solution then remove queen from board[i][col] */
            board[i][col].value = 0;
        }
    }

    /* If queen can not be place in any row in this column col, then return false */
    return false;
  }

   queenPuzzle(rows, columns) {
      if (rows <= 0) {
          return [[]];
      } else {
          return this.addQueen(rows - 1, columns);
      }
  }

   addQueen(newRow, columns, prevSolution) {
      var newSolutions = [];
      var prev = this.queenPuzzle(newRow, columns);
      for (var i = 0; i < prev.length; i++) {
          var solution = prev[i];
          for (var newColumn = 0; newColumn < columns; newColumn++) {
              if (!this.hasConflict(newRow, newColumn, solution))
                  newSolutions.push(solution.concat([newColumn]))
          }
      }
      return newSolutions;
  }

   hasConflict(newRow, newColumn, solution) {
      for (var i = 0; i < newRow; i++) {
          if (solution[i]     == newColumn          ||
              solution[i] + i == newColumn + newRow ||
              solution[i] - i == newColumn - newRow) {
                  return true;
          }
      }
      return false;
  }
}
