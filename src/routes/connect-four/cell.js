import { observable } from 'aurelia-framework';

export class Cell {

  @observable value = 'initial';
  row;
  col;
  @observable color = 'white';

  constructor(value, row, col, color) {
    this.value = value;
    this.row = row;
    this.col = col;
    this.color = color;
  }

  valueChanged(newValue, oldValue) {
//      console.log(newValue, oldValue);
  }
}
