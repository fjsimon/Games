import {BindingEngine, inject} from 'aurelia-framework';
import {Cell} from './cell';

@inject(BindingEngine)
export class Sudoku {

  heading = 'Sudoku Solver';

  board = [
       [1,2,0,4,5,0,0,8,0],
       [0,0,4,0,0,3,5,0,0],
       [3,0,6,7,0,0,0,4,2],
       [4,0,9,0,0,5,7,2,0],
       [0,1,0,3,4,0,6,0,5],
       [2,0,5,9,0,0,3,1,4],
       [0,7,0,0,0,0,8,0,0],
       [9,0,0,5,0,0,0,0,6],
       [0,4,3,8,0,7,2,0,1],
     ];

  boardCell = [];

  constructor(bindingEngine) {

    this.bindingEngine = bindingEngine;
    let subscription = this.bindingEngine.collectionObserver(this.board).subscribe(this.listChanged);
  }

  activate(){

    for(let i = 0; i < this.board.length; i++) {
        let row = [];
        for(let j = 0; j < this.board[i].length; j++) {
            row.push(new Cell(this.board[i][j]));
        }
        this.boardCell.push(row);
    }
  }

  solveSudoku(){

    this.solve(0, 0, this.boardCell);
  }

  readFile() {

  }

  listChanged(splices) {

    console.log(splices);
  }

  solve(i, j, cells){

      if(i === 9) {
        i = 0;
        if(++j === 9){
          return true;
        }
      }

      if(cells[i][j].value !== 0) {
        return this.solve(i+1, j, cells);
      }

      for(var val = 1; val <= 9; ++val) {

        if(this.legal(i,j,val,cells)){
          cells[i][j].value = val;
          if(this.solve(i+1, j, cells)) {
            return true;
          }
        }
      }

      cells[i][j].value = 0; //reset on backtrack
      return false;
  }

  legal(i, j, val, cells){

      //ROWS
      for(var k = 0; k < 9; ++k){
        if(val === cells[k][j].value) {
          return false;
        }
      }

      // COLS
      for(var k = 0; k < 9; ++k){
        if(val === cells[i][k].value) {
          return false;
        }
      }

      //SQUARES
      var boxRowOffset = (Math.floor(i / 3) * 3) ;
      var boxColOffset = (Math.floor(j / 3) * 3) ;
      for(var k = 0; k < 3; k++){
        for(var m = 0; m < 3; m++){
          if(val === cells[boxRowOffset+k][boxColOffset+m].value) {
            return false;
          }
        }
      }

      return true; // no violations, so it's legal
  }
}
