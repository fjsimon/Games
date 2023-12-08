import {EightQueens, Sudoku} from '../../src/routes/eight-queens/eight-queens';
import {Container} from 'aurelia-dependency-injection';
import {BindingEngine} from 'aurelia-binding';

// class RouterStub {
//   configure(handler) {
//     handler(this);
//   }
//
//   map(routes) {
//     this.routes = routes;
//   }
// }

describe('EightQueens Router module', () => {

  var testee;
  var container, bindingEngine;

  beforeEach(() => {
    container = new Container();
    bindingEngine  = container.get(BindingEngine);
    testee = new EightQueens({store: ""}, bindingEngine, {});

  });

  it('is defined', () => {
    expect(testee).toBeDefined();
  });

  it('configures the heading', () => {
    expect(testee.heading).toEqual('Eight Queens');
  });

});
