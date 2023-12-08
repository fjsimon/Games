import {Sudoku} from '../../src/routes/sudoku/sudoku';
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

describe('Sudoku Router module', () => {

  var testee;
  var container, bindingEngine;

  beforeEach(() => {
    container = new Container();
    bindingEngine  = container.get(BindingEngine);
    testee = new Sudoku({store: ""}, bindingEngine, {});

  });

  it('is defined', () => {
    expect(testee).toBeDefined();
  });

  it('configures the heading', () => {
    expect(testee.heading).toEqual('Sudoku Solver');
  });

});
