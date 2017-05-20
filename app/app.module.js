(function(app) {
  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var ClockService = app.ClockService;
  var ClockComponent = app.ClockComponent;
  var AppComponent = app.AppComponent;

  app.AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ClockComponent],
    providers: [ClockService],
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function() { }
  });

})(window.app || (window.app = {}));
