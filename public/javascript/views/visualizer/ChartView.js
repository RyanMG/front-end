DatsyApp.ChartView = Backbone.View.extend({

  events: {

  },

  initialize: function(options) {
    this.currentXModel = null;
    this.currentYModel = null;
  },

  render: function() {
    // this.$el.html(this.template());
    return this.$el;
  },

  renderChart: function() {
    this.trigger('renderChart', { chartView: true, x: this.currentXModel, y: this.currentYModel });
  },

  addXModel: function(model) {
    this.currentXModel = model;
    this.checkForRender();
  },

  addYModel: function(model) {
    this.currentYModel = model;
    this.checkForRender();
  },

  checkForRender: function() {
    if (this.currentYModel !== null && this.currentXModel !== null) {
      $('#renderChart').prop('disabled', false);
    }    
  }


});
