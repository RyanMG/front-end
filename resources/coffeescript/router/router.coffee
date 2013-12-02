class DatsyApp.Router extends Backbone.Router
  
  initialize: (options) ->
    @$el = options.el
    @model = options.model
    @currentView = undefined
    @model.on 'loaded', @setTags
    @

  routes:
    '': 'index',
    'visualize': 'visualize',
    'filterDatasets/*params': 'filterDatasets',
    'filterDatasets': 'filterDatasets',
    'explore/*params': 'explore',
    'explore': 'explore'
  
  swapView: (view) ->
    delete @currentView if @currentView
    @currentView = view
    @$el.html view.render().el

  index: ->
    indexView = new DatsyApp.IndexView { model: @model }
    @swapView indexView

  visualize: ->
    visView = new DatsyApp.VisView { model: @model }
    @swapView visView

  filterDatasets: (params) ->
    params = params || []
    FilterDataSetsView = new DatsyApp.FilterDataSetsView {
      datsyModel: @model,
      searchTopic: params
    }
    @swapView FilterDataSetsView

  explore: (params) ->
    params = params || ''
    exploreDataSetsViews = new DatsyApp.ExploreDataSetsView {
      path: params,
      datsyModel: @model
    }
    @swapView exploreDataSetsViews
