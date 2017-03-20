import { observable } from 'aurelia-framework';

export class Cell {

  @observable value = 'initial';

  constructor(value) {
    this.value = value;
  }

  valueChanged(newValue, oldValue) {
      console.log(newValue, oldValue);
  }
}
