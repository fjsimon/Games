import {BindingEngine, inject, observable} from 'aurelia-framework';

@inject('StoreWrapper', BindingEngine)
export class Simon {

  heading = 'Simon says';
  blue = 'BLUE';
  red = 'RED';
  green = 'GREEN'
  yellow = 'YELLOW';

  randomOptions = [];
  selectedOptions = [];

  constructor(storeWrapper, bindingEngine) {

    this.store = storeWrapper.store;
    this.bindingEngine = bindingEngine;
  }

  attached() {

  }

  detached() {

  }

  update() {

  }

  rand() {

    switch(Math.ceil((Math.random()*10) % 4)){
      case 1: return this.blue;
      case 2: return this.red;
      case 3: return this.green;
      case 4: return this.yellow;
    }
  }

  activate() {

    this.randomOptions.push(this.rand());
  }

  click(value) {

    console.log(value);
  }
}
