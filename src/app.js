export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: '', name: 'sudoku', moduleId: './sudoku', nav: true, title: 'Sudoku' }
    ]);

    this.router = router;
  }
}
