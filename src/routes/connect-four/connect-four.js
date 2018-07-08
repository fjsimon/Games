import {BindingEngine, inject, observable} from 'aurelia-framework';
import {Cell} from './cell';
import {Controller} from './controller';
import {SelectPosition} from '../../actions/connect-four/select';
import * as constant from './constant';
import './connect-four.less';

@inject('StoreWrapper', BindingEngine, SelectPosition, Controller)
export class ConnectFour {

  heading = 'Connect Four';
  board = [];
  depths = [3,4,5];
  selectedDepth = '';
  scores = [0,0,0,0,0,0,0];

  constructor(storeWrapper, bindingEngine, selectPosition, controller) {
    this.store = storeWrapper.store;
    this.bindingEngine = bindingEngine;
    this.selectPosition = selectPosition;
    this.controller = controller;
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
    let elementCol = state.connectFour.selectPosition.col;
    this.controller.place(this.board, elementCol, constant.RED);
    let decision = this.controller.generateComputerDecision(this.board, this.selectedDepth);
    this.controller.place(this.board, decision.column, constant.YELLOW);
    this.scores = decision.scores;
  }

  activate(){
    this.resetBoard();
  }

  click(element) {
    let elem = element;
    this.store.dispatch(this.selectPosition.selectPosition(elem));
  }

  depthChanged() {
    this.reset();
  }

  reset() {
    this.turno = 1;
    this.resetBoard();
  }

  resetBoard() {
    this.board = [];
    for(let i = 0; i < constant.ROW; i++) {
      let row = [];
      for(let j = 0; j < constant.COL; j++) {
        row.push(new Cell(0, i, j, constant.WHITE));
      }
      this.board.push(row);
    }
  }
}
