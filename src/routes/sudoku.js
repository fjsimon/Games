import {BindingEngine, inject, observable} from 'aurelia-framework';
import {Cell} from './cell';
import {Select} from '../actions/select';

@inject('StoreWrapper', BindingEngine, Select)
export class Sudoku {

  heading = 'Sudoku Solver';

  @observable solved = false;

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

  constructor(storeWrapper, bindingEngine, select) {

    this.store = storeWrapper.store;
    this.select = select;
    this.bindingEngine = bindingEngine;
    let subscription = this.bindingEngine.collectionObserver(this.board).subscribe(this.listChanged);
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

    this.store.dispatch(this.select.select("selected"));

    for(let i = 0; i < this.board.length; i++) {
        let row = [];
        for(let j = 0; j < this.board[i].length; j++) {
            row.push(new Cell(this.board[i][j]));
        }
        this.boardCell.push(row);
    }
  }

  solveSudoku() {

    this.solve(0, 0, this.boardCell);
    this.solved = true;
  }

	resetSudoku() {

		/* We define difficulty as follows:
			Easy: 32+ clues (49 or fewer holes)
			Medium: 27-31 clues (50-54 holes)
			Hard: 26 or fewer clues (54+ holes)
			This is human difficulty, not algorithmically (though there is some correlation)
		*/
		let remainingSquares = 81;
		let remainingHoles = 49;

		for(let i=0; i<9; i++) {
			for(let j=0; j<9; j++) {
			  let holeChance = remainingHoles/remainingSquares;
				if(Math.random() <= holeChance) {
					this.boardCell[i][j].value = 0;
					remainingHoles -= 1;
				}
				remainingSquares -= 1;
			}
		}

    this.solved = false;
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

  updateFilesSelect(event) {

    console.log(event);
    this.handleFileSelected(event, this);
  }

  isSquare(n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  }

  updateBoard(list, self){
    self.boardCell = [];
    let row = [];
    for (let i = 0; i <= list.length; i++) {
        if (i !== 0 && i % 9 === 0) {
          self.boardCell.push(row);
          row = [];
        }
        row.push(new Cell(parseInt(list[i])));
    }
    console.log(self.boardCell);
  }

  handleFileSelected(evt, self) {

    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++) {

      if (!f.type.match('text.*')) {
        continue;
      }

      var reader = new FileReader();
            reader.onload = (function(file) {
              return function(e) {

                let list = e.target.result.split('');
                console.log(list);
                if(!self.isSquare(list.length)) {
                  return;
                }

                self.updateBoard(list, self);

              };
            })(f);

            // Read in the image file as a data URL.
            reader.readAsText(f);

      }
    }
}
