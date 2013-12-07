class DatsyApp.ListDataSetsView extends Backbone.View
  
  className: 'explore-datasets',

  events:
    'mouseover .dataset-table-listing': 'showMoreInfo',
    'mousemove .dataset-table-listing': 'updateXY',
    'mouseleave .dataset-table-listing': 'hideMoreInfo'

  initialize: (options) ->
    @datsyModel = options.datsyModel
    @dataSetColumnTemplate = options.dataSetColumnTemplate
    @databases = options.databases

  render: ->
    @databases.each (model) =>
      panel = new DatsyApp.DataSetItemView { datsyModel: @datsyModel, dataSetColumnTemplate: @dataSetColumnTemplate, model: model }
      shortenedNames = @shortenNames model.attributes 
      @$el.append('<div class="dataset-table-listing" data-name="' + model.attributes.title + '" data-source="' + model.attributes.author + '"><div class="dataset-table-name" data-name="' + model.attributes.title + '" data-source="' + model.attributes.author + '">' + shortenedNames.title + '</div><div class="dataset-source" data-name="' + model.attributes.title + '" data-source="' + model.attributes.author + '">' + shortenedNames.author + '</div><div class="dataset-rating" data-name="' + model.attributes.title + '" data-source="' + model.attributes.author + '"><span class="glyphicon glyphicon-star" data-name="' + model.attributes.title + '" data-source="' + model.attributes.author + '"></span></div></div>')
      @$el.append(panel.render().el)
    setTimeout (=> @$el.accordion({ collapsible: true, heightStyle: 'content', active: false, icons: false }) ), 0
    @

  shortenNames: (attributes) ->
    names = {}
    names.title = attributes.title
    if names.title.length > 30
      names.title = names.title.slice(0,30)
      names.title += '...'
    names.author = attributes.author
    if names.author.length > 26
      names.author = names.author.slice(0,26)
      names.author += '...'
    names

  showMoreInfo: (event) ->
    clearTimeout(@showMore) if @showMore
    @showMore = setTimeout (=>
      if @showMore
        name = event.target.dataset.name
        source = event.target.dataset.source
        $('#showMoreBox').html('<p>' + name + '</p><p>' + source + '</p>').fadeIn(300)
    ), 1000

  hideMoreInfo: ->
    clearTimeout(@showMore)
    $('#showMoreBox').fadeOut(300)

  updateXY: ->
    $('#showMoreBox').css({top: event.clientY + 20, left: event.clientX - 150 })
