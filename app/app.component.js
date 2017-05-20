(function(app) {
  var Component = ng.core.Component;

  app.AppComponent = Component({
    selector: 'my-app',
    template:
      '<h1 style="text-align:center;">Exercicio 1 - Exibir hora corrente de 1 em 1 segundos</h1>' +
      '<clock></clock>'
  })
  .Class({
    constructor: function AppComponent() { }
  });

})(window.app || (window.app = {}));
