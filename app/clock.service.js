(function(app) {
  var Class = ng.core.Class;

  app.ClockService = Class({
    constructor: function ClockService() {
    },
    getTime: function() {
      return new Date().getHours()+':'+ new Date().getMinutes()+':'+new Date().getSeconds();
    },
    generateTimeNow: function(delay, callback) {
      var self = this;
      callback(this.getTime());
      setInterval(function() {
        callback(self.getTime());
      }, delay);
    }
  });
  

})(window.app || (window.app = {}));
