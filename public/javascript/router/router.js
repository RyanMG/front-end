DatsyApp.Router = Backbone.Router.extend({
  
  initialize: function(options) {
    this.$el = options.el;
    this.model = options.model;
  },

  routes: {
    "": "index",
  },
  
  swapView: function(view) {
    this.$el.html( view.render().el);
  },

  index: function(){
    console.log('index route');
    var indexView = new DatsyApp.IndexView({ model: this.model });
    this.swapView(indexView);
  }

});
