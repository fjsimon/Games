import {BindingEngine, inject, observable} from 'aurelia-framework';

@inject('StoreWrapper', BindingEngine)
export class ConnectFour {

  heading = 'Connect Four';

}
