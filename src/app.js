export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: '', name: 'sudoku', moduleId: './routes/sudoku', nav: true, title: 'Sudoku' },
      { route: 'eightQueens', name: 'eightQueens', moduleId: './routes/eight-queens', nav: true, title: 'Eight Queens' },
      { route: 'connectFour', name: 'connectFour', moduleId: './routes/connect-four', nav: true, title: 'Connect Four' }
    ]);

    this.router = router;
  }
}
