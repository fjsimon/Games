import {BindingEngine, inject, observable} from 'aurelia-framework';

@inject('StoreWrapper', BindingEngine)
export class EightQueens {

  heading = 'Eight Queens';

}
