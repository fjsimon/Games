import {ConnectFour} from '../../src/routes/connect-four/connect-four';
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

describe('ConnectFour Router module', () => {

  var testee;
  var container, bindingEngine;

  beforeEach(() => {
    container = new Container();
    bindingEngine  = container.get(BindingEngine);
    testee = new ConnectFour({store: ""}, bindingEngine, {});

  });

  it('is defined', () => {
    expect(testee).toBeDefined();
  });

  it('configures the heading', () => {
    expect(testee.heading).toEqual('Connect Four');
  });

});
