class DatsyApp.DataSetItemView extends Backbone.View

  tagName: 'ul',

  className: 'column-list',

  initialize: (options) ->
    @datsyModel = options.datsyModel
    @dataSetColumnTemplate = options.dataSetColumnTemplate

  render: ->
    console.log @model
    about = @model.get "description"
    cols = @model.get "col_count"
    rows = @model.get "row_count"
    @$el.append('<li class="dataset-item-header well well-sm"><span class="dataset-item-header-title">About this dataset:</span> ' + about + '<br/><span class="dataset-item-header-title">Columns:</span> ' + cols + '<br/><span class="dataset-item-header-title">Rows:</span> ' + rows + '</li>')
    columns = @model.getColumns().map (column) =>
      return new DatsyApp.DataSetColumnView { datsyModel: @datsyModel, model: column, template: @dataSetColumnTemplate, datasetName: @model.getId() }
    columns.forEach (column) =>
      @$el.append(column.render().el)
    @

