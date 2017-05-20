(function(app) {
  var Component = ng.core.Component;
  var ClockService = app.ClockService;

  app.ClockComponent = Component({
    selector: 'clock',
    template: '<h3 style="text-align:center; border:3px solid gray"><h2>{{clock}}</h2></h3>'
  })
  .Class({
    constructor: [ClockService, function ClockComponent(clockService) {
      var objectThis = this;
      clockService.generateTimeNow(0, function(timeNow) {
        objectThis.clock = timeNow;
      });
    }]
  });

})(window.app || (window.app = {}));
