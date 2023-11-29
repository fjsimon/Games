import {App} from '../../src/app';

class RouterStub {
  configure(handler) {
    handler(this);
  }

  map(routes) {
    this.routes = routes;
  }
}

describe('the App module', () => {
  var sut;
  var mockedRouter;

  beforeEach(() => {
    mockedRouter = new RouterStub();
    sut = new App();
    sut.configureRouter(mockedRouter, mockedRouter);
  });

  it('contains a router property', () => {
    expect(sut.router).toBeDefined();
  });

  it('configures the router title', () => {
    expect(sut.router.title).toEqual('Games');
  });

  it('should have a sudoku route', () => {
    expect(sut.router.routes).toContain({ route: '', name: 'sudoku',  moduleId: './routes/sudoku/sudoku', nav: true, title: 'Sudoku' });
  });

  it('should have a eightQueens route', () => {
    expect(sut.router.routes).toContain({ route: 'eightQueens', name: 'eightQueens', moduleId: './routes/eight-queens/eight-queens', nav: true, title: 'Eight Queens' });
  });

  it('should have a connectFour route', () => {
    expect(sut.router.routes).toContain({ route: 'connectFour', name: 'connectFour', moduleId: './routes/connect-four/connect-four', nav: true, title: 'Connect Four' });
  });
});
