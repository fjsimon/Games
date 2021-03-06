export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: '',            name: 'sudoku',      moduleId: './routes/sudoku/sudoku',              nav: true, title: 'Sudoku' },
      { route: 'eightQueens', name: 'eightQueens', moduleId: './routes/eight-queens/eight-queens',  nav: true, title: 'Eight Queens' },
      { route: 'connectFour', name: 'connectFour', moduleId: './routes/connect-four/connect-four',  nav: true, title: 'Connect Four' },
      { route: 'simon',       name: 'simon',       moduleId: './routes/simon',                      nav: true, title: 'Simon says' }
    ]);

    this.router = router;
  }
}
