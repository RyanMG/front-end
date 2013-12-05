class DatsyApp.ExploreDataSetsView extends Backbone.View

  className: 'explore container'

  initialize: (options) ->
    @datsyModel = options.datsyModel
    @path = options.path
    @loadingTemplate = @datsyModel.get('templates')['loadingExplore']
    @template = @datsyModel.get('templates')['exploreDataSets']
    
    @exploreMainView = new DatsyApp.ExploreMainView { datsyModel: @datsyModel, path: @path }
    @exploreMainView.on 'ready', =>
      setTimeout (=> @renderLoaded()), 1000
    
    @cartView = new DatsyApp.ColumnCartView { datsyModel: @datsyModel }    
    @cartView.on 'clearCart', @clearCart

    @datsyModel.on 'visualizationDataLoaded', @loadVisualization

  render: ->
    @$el.html @loadingTemplate
    @
  
  renderLoaded: =>
    @$el.html @template
    @$el.append @exploreMainView.render().el
    @$el.append @cartView.render().el

  clearCart: =>
    @datsyModel.clearCart()

  loadVisualization: =>
    Backbone.history.navigate "/visualize", {trigger: true}

