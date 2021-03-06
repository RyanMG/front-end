(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  DatsyApp.DatsyView = (function(_super) {
    __extends(DatsyView, _super);

    function DatsyView() {
      _ref = DatsyView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    DatsyView.prototype.events = {
      'click .navbar-brand': 'loadIndex',
      'click #explore': 'navigateToExplore',
      'click #visualizer': 'navigateToVisualizer',
      'click #login': 'navigateToLogin',
      'focus .header-search-box': 'fadeInSubmit',
      'blur .header-search-box': 'fadeOutSubmit',
      'click .header-search-submit': 'searchKeyword'
    };

    DatsyView.prototype.initialize = function() {
      this.template = this.model.get('templates')['datsyApp'];
      $('body').prepend(this.render().el);
      this.router = new DatsyApp.Router({
        el: this.$el.find('#wrapper'),
        model: this.model
      });
      return Backbone.history.start({
        pushstate: true
      });
    };

    DatsyView.prototype.render = function() {
      this.$el.html(this.template());
      return this;
    };

    DatsyView.prototype.loadIndex = function() {
      return this.router.navigate("/", {
        trigger: true
      });
    };

    DatsyView.prototype.navigateToExplore = function() {
      return this.router.navigate("/explore", {
        trigger: true
      });
    };

    DatsyView.prototype.navigateToVisualizer = function() {
      return this.router.navigate("/popularVisualizations", {
        trigger: true
      });
    };

    DatsyView.prototype.fadeInSubmit = function() {
      return $('.header-search-submit').fadeIn(300);
    };

    DatsyView.prototype.fadeOutSubmit = function() {
      return $('.header-search-submit').fadeOut(300);
    };

    DatsyView.prototype.searchKeyword = function(event) {
      var tag;
      event && event.preventDefault();
      tag = $('.header-search-box').val();
      $('.header-search-box').val('');
      return this.router.navigate("/filterDatasets/" + tag, {
        trigger: true
      });
    };

    DatsyView.prototype.navigateToLogin = function(event) {
      return event && event.preventDefault();
    };

    return DatsyView;

  })(Backbone.View);

}).call(this);
