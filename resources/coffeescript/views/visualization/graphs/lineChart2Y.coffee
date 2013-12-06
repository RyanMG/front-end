renderLineChart2Y (data) ->
  return nv.addGraph ->
    chart = nv.models.multiChart()
      .margin({top: 30, right: 60, bottom: 50, left: 70})
      .color(d3.scale.category10().range())

    chart.xAxis
      .tickFormat(d3.format(',f'))

    chart.yAxis1
      .tickFormat(d3.format(',.1f'))

    chart.yAxis2
      .tickFormat(d3.format(',.1f'))


    d3.select('#graph svg')
        .datum(testdata)
      .transition().duration(500).call(chart)

    return chart

testdata = stream_layers(7,10+Math.random()*100,.1).map( (data, i) ->
  return {
    key: 'Stream' + i,
    values: data.map
      (a) -> 
        a.y = a.y * (i <= 1 ? -1 : 1) 
        return a

testdata[0].type = 'area'
testdata[0].yAxis = 1
testdata[1].type = 'area'
testdata[1].yAxis = 1
testdata[2].type = 'line'
testdata[2].yAxis = 1
testdata[3].type = 'line'
testdata[3].yAxis = 2
testdata[4].type = 'bar'
testdata[4].yAxis = 2
testdata[5].type = 'bar'
testdata[5].yAxis = 2
testdata[6].type = 'bar'
testdata[6].yAxis = 2
