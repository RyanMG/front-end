class DatsyApp.Datsy extends Backbone.Model

  initialize: ->
    @set 'AppName', 'Datsy'
    @set 'tags', new DatsyApp.Tags()
    @

  tagExists: (tag) ->
    tags = @get 'tags'
    return tags.has(tag)

  listTags: ->
    tags = @get 'tags'
    return tags.list();

  triggerAddColumn: (columnName, datasetID) ->
    @trigger 'addColumn', { columnName: columnName, datasetID: datasetID }
