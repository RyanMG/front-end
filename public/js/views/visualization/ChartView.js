DatsyApp.ChartView = DatsyApp.SvgBackboneView.extend({

  events: {
    
  },

  tagName: 'svg',

  initialize: function(options) {
    this.currentXModel = null;
    this.currentYModel = null;
    this.chartWidth = $('.container').width();
    this.chartHeight = this.chartWidth / 2;
    this.fakeJSON = {
      "Date":
        ["2013-11-27","2013-11-26","2013-11-25","2013-11-22","2013-11-21","2013-11-20","2013-11-19","2013-11-18","2013-11-15","2013-11-14","2013-11-13","2013-11-12","2013-11-11","2013-11-08","2013-11-07","2013-11-06","2013-11-05","2013-11-04","2013-11-01","2013-10-31","2013-10-30","2013-10-29","2013-10-28","2013-10-25","2013-10-24","2013-10-23","2013-10-22","2013-10-21","2013-10-18","2013-10-17","2013-10-16","2013-10-15","2013-10-14","2013-10-11","2013-10-10","2013-10-09","2013-10-08","2013-10-07","2013-10-04","2013-10-03","2013-10-02","2013-10-01","2013-09-30","2013-09-27","2013-09-26","2013-09-25","2013-09-24","2013-09-23","2013-09-20","2013-09-19","2013-09-18","2013-09-17","2013-09-16","2013-09-13","2013-09-12","2013-09-11","2013-09-10","2013-09-09","2013-09-06","2013-09-05","2013-09-04","2013-09-03","2013-08-30","2013-08-29","2013-08-28","2013-08-27","2013-08-26","2013-08-23","2013-08-22","2013-08-21","2013-08-20","2013-08-19","2013-08-16","2013-08-15","2013-08-14","2013-08-13","2013-08-12","2013-08-09","2013-08-08","2013-08-07","2013-08-06","2013-08-05","2013-08-02","2013-08-01","2013-07-31","2013-07-30","2013-07-29","2013-07-26","2013-07-25","2013-07-24","2013-07-23","2013-07-22","2013-07-19","2013-07-18","2013-07-17","2013-07-16","2013-07-15","2013-07-12","2013-07-11","2013-07-10","2013-07-09","2013-07-08","2013-07-05","2013-07-03","2013-07-02","2013-07-01","2013-06-28","2013-06-27","2013-06-26","2013-06-25","2013-06-24","2013-06-21","2013-06-20","2013-06-19","2013-06-18","2013-06-17","2013-06-14","2013-06-13","2013-06-12","2013-06-11","2013-06-10","2013-06-07","2013-06-06","2013-06-05","2013-06-04","2013-06-03","2013-05-31","2013-05-30","2013-05-29","2013-05-28","2013-05-24","2013-05-23","2013-05-22","2013-05-21","2013-05-20","2013-05-17","2013-05-16","2013-05-15","2013-05-14","2013-05-13","2013-05-10","2013-05-09","2013-05-08","2013-05-07","2013-05-06","2013-05-03","2013-05-02","2013-05-01","2013-04-30","2013-04-29","2013-04-26","2013-04-25","2013-04-24","2013-04-23","2013-04-22","2013-04-19","2013-04-18","2013-04-17","2013-04-16","2013-04-15","2013-04-12","2013-04-11","2013-04-10","2013-04-09","2013-04-08","2013-04-05","2013-04-04","2013-04-03","2013-04-02","2013-04-01","2013-03-28","2013-03-27","2013-03-26","2013-03-25","2013-03-22","2013-03-21","2013-03-20","2013-03-19","2013-03-18","2013-03-15","2013-03-14","2013-03-13","2013-03-12","2013-03-11","2013-03-08","2013-03-07","2013-03-06","2013-03-05","2013-03-04","2013-03-01","2013-02-28","2013-02-27","2013-02-26","2013-02-25","2013-02-22","2013-02-21","2013-02-20","2013-02-19","2013-02-15","2013-02-14","2013-02-13","2013-02-12","2013-02-11","2013-02-08","2013-02-07","2013-02-06","2013-02-05","2013-02-04","2013-02-01","2013-01-31","2013-01-30","2013-01-29","2013-01-28","2013-01-25","2013-01-24","2013-01-23","2013-01-22","2013-01-18","2013-01-17","2013-01-16","2013-01-15","2013-01-14","2013-01-11","2013-01-10","2013-01-09","2013-01-08","2013-01-07","2013-01-04","2013-01-03","2013-01-02"],
      "Result1":
        ["545.96","533.40","523.74","519.80","521.14","515.00","519.55","518.63","524.99","528.16","520.63","520.01","519.05","520.56","512.49","520.92","525.45","526.75","520.03","522.70","524.90","516.68","529.88","525.96","531.91","524.96","519.87","521.36","508.89","504.50","501.11","498.68","496.04","492.81","489.64","486.59","480.94","487.75","483.03","483.41","489.56","487.96","476.75","482.75","486.22","481.53","489.10","490.64","467.41","472.30","464.68","455.32","450.12","464.90","472.69","467.71","494.64","506.17","498.22","495.27","498.69","488.58","487.22","491.70","490.90","488.59","502.97","501.02","502.96","502.36","501.07","507.74","502.33","497.91","498.50","489.57","467.36","454.45","461.01","464.98","465.25","469.45","462.54","456.68","452.53","453.32","447.79","440.99","438.50","440.51","418.99","426.31","424.95","431.76","430.31","430.20","427.44","426.51","427.29","420.73","422.35","415.05","417.42","420.80","418.49","409.22","396.53","393.78","398.07","402.63","402.54","413.50","416.84","423.00","431.77","432.00","430.05","435.96","432.19","437.60","438.89","441.81","438.46","445.11","449.31","450.72","449.73","451.58","444.95","441.44","445.15","442.14","441.35","439.66","442.93","433.26","434.58","428.85","443.86","454.74","452.97","456.77","463.84","458.66","460.71","449.98","445.52","439.29","442.78","430.12","417.20","408.38","405.46","406.13","398.67","390.53","392.05","402.80","426.24","419.85","429.80","434.33","435.69","426.98","426.21","423.20","427.72","431.99","429.79","428.91","442.66","452.08","461.14","463.58","461.91","452.73","452.08","454.49","455.72","443.66","432.50","428.35","428.43","437.87","431.72","430.58","425.66","431.14","420.05","430.47","441.40","444.57","448.97","442.80","450.81","446.06","448.85","459.99","460.16","466.59","467.01","467.90","479.93","474.98","468.22","457.35","457.84","442.32","453.62","455.49","456.83","458.27","449.83","439.88","450.50","514.01","504.77","500.00","502.68","506.09","485.92","501.75","520.30","523.51","517.10","525.31","523.90","527.00","542.10","549.03"],
      "Result2":
      ["1063.11","1058.41","1045.93","1031.89","1034.07","1022.31","1025.20","1031.55","1033.56","1035.23","1032.47","1011.78","1010.59","1016.03","1007.95","1022.75","1021.52","1026.11","1027.04","1030.58","1030.42","1036.24","1015.00","1015.20","1025.55","1031.41","1007.00","1003.30","1011.41","888.79","898.03","882.01","876.11","871.99","868.24","855.86","853.67","865.74","872.35","876.09","887.99","887.00","875.91","876.39","878.17","877.23","886.84","886.50","903.11","898.39","903.32","886.11","887.76","889.07","893.06","896.19","888.67","888.05","879.58","879.56","871.63","860.38","846.90","855.43","848.55","850.15","866.39","870.21","873.71","869.33","865.42","865.65","856.91","859.66","869.81","881.25","885.51","890.41","892.66","890.65","896.57","905.00","906.57","904.22","887.75","890.92","882.27","885.35","887.70","902.90","903.80","910.70","896.60","910.68","918.55","919.61","924.69","923.00","920.24","905.99","905.24","905.09","893.49","886.43","882.31","887.88","880.37","877.07","873.65","866.20","869.79","880.93","884.74","900.68","900.62","886.25","875.04","877.00","871.98","879.81","890.22","879.73","864.64","859.70","859.10","867.63","871.22","870.76","868.31","881.27","873.32","882.79","889.42","906.97","908.53","909.18","903.87","915.89","887.10","877.53","880.23","871.48","873.63","857.23","861.55","845.72","829.61","820.43","824.57","819.06","801.42","809.10","813.45","807.90","800.11","799.87","765.91","782.56","793.37","781.93","790.05","790.39","790.18","777.65","774.85","783.05","795.07","806.20","813.04","801.19","794.19","802.66","812.42","809.64","810.31","811.26","814.71","811.32","807.79","814.30","821.54","825.31","827.61","834.82","831.52","832.60","831.38","838.60","821.50","806.19","801.20","799.78","790.13","790.77","799.71","795.53","792.46","806.85","792.89","787.82","782.86","780.70","782.42","785.37","773.95","770.17","765.74","759.02","775.60","755.69","753.83","753.68","750.73","753.67","754.21","741.50","702.87","704.51","711.32","715.19","724.93","723.25","739.99","741.48","738.12","733.30","734.75","737.97","723.67","723.25"]
    },
    this.data = this.convertJSONForD3(this.fakeJSON, 'Date', 'Result1', 'Result2');
    var xRange = this.findMinMax(this.data, 'xAxis');
    var yRange = this.findMinMax(this.data, 'series1', 'series2');
    this.margin = {top: 20, right: 20, bottom: 20, left: 20};
    this.padding = 40;
    this.width = this.chartWidth - this.margin.left - this.margin.right;
    this.height = this.chartHeight - this.margin.top - this.margin.bottom;
    this.minDate = xRange.min;
    this.maxDate = xRange.max;

    // TODO: Need to get max of all series
    this.y = d3.scale.linear()
         .domain([yRange.min, yRange.max])
         .range([this.height - this.padding, this.padding]);

    // TODO: Need to get x-range of all series
    this.x = d3.time.scale()
         .domain([this.minDate, this.maxDate])
         .range([this.padding, this.width - this.padding]);
  },

  render: function(chartType) {
    
    if(!chartType){
      this.renderLineChart();
    } else {
      if(chartType === 'lineChart'){
        this.renderLineChart();
      } else if(chartType === 'streamGraph'){
        this.renderStreamGraph();
      }
    }

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
  },

  convertJSONForD3: function(data, x) {
    // TODO: Add error checking
    var d3Data = [];
    var args = Array.prototype.slice.call(arguments,2);

    for(var i=0; i < data[x].length; i++) {
      d3Data.push({xAxis: new Date(data[x][i]).getTime(), series1: +data[args[0]][i], series2: +data[args[1]][i]});
    }

    return d3Data;
  },

  // DATA FORMAT:
  //   { 
  //     xAxis: [],
  //     series1: [],
  //     series2: [],
  //     ...
  //   }
  findMinMax: function(data) {
    var min;
    var max;
    var curVal;
    var propertiesArray = Array.prototype.slice.call(arguments, 1);
    var concatArr = [];

    for(var i=0; i < data.length; i++){
      for(var j=0; j < propertiesArray.length; j++){
        concatArr.push(data[i][propertiesArray[j]]);
      }
    }

    for(i=0; i < concatArr.length; i++){
      curVal = concatArr[i];

      if(!min){
        min = curVal;
      }
      if(!max){
        max = curVal;
      }

      if(curVal < min){
        min = curVal;
      }

      if(curVal > max){
        max = curVal;
      }
    }

    return { min: min, max: max };
  },

  renderLineChart: function() {
    console.log('render line chart');
    var x = this.x;
    var y = this.y;
    var margin = this.margin;
    var minDate = this.minDate;
    var maxDate = this.maxDate;

    var chart = d3.select(this.el)
        .attr('width', this.width + this.margin.right + this.margin.left)
        .attr('height', this.height + this.margin.top + this.margin.bottom);

    chart.selectAll("line.horizontalGrid").data(y.ticks(10)).enter()
        .append("line")
          .attr(
          {
            "class":"horizontalGrid",
            "x1" : this.padding + margin.left,
            "x2" : this.width - margin.right,
            "y1" : function(d){ return y(d);},
            "y2" : function(d){ return y(d);},
            "fill" : "none",
            "shape-rendering" : "crispEdges",
            "stroke" : "#999",
            "stroke-dasharray": "2,1",
            "stroke-width" : "1px"
          });

    var g = chart.append('svg:g')
        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    // Plot first data series
    var line1 = d3.svg.line()
        .x(function(d, i) { return x(d.xAxis); })
        .y(function(d) { return y(d.series1) - margin.top; });
    
    g.append('svg:path')
      .attr('d', line1(this.data))
      .style('stroke', 'blue');  // TODO: Should be assigned a color in progressive order
    
    // Plot second data series
    var line2 = d3.svg.line()
        .x(function(d, i) { return x(d.xAxis); })
        .y(function(d) { return y(d.series2) - margin.top; });
    g.append('svg:path')
      .attr('d', line2(this.data))
      .style('stroke', 'red');  // TODO: should be assigned a color in progressive order

    var xAxis = d3.svg.axis()
      .scale(x)
      .orient('bottom')
      .ticks(12)
      .tickFormat(d3.time.format('%b'));

    chart.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(' + this.margin.left + ',' + (this.height - this.padding + 20) + ")")
      .call(xAxis)
      .selectAll("text")
        .attr("y", 0)
        .attr("x", 9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(90)")
        .style("text-anchor", "start");

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient('left')
      .ticks(5, '$');

    chart.append('g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(' + this.padding + ',0)')
      .call(yAxis);

    return chart;
  },

  renderStreamGraph: function() {
    console.log('render stream graph');
    // Inspired by Lee Byron's test data generator.
    var bumpLayer = function(n) {

      var bump = function(a) {
        var x = 1 / (.1 + Math.random()),
            y = 2 * Math.random() - .5,
            z = 10 / (.1 + Math.random());
        for (var i = 0; i < n; i++) {
          var w = (i / n - y) * z;
          a[i] += x * Math.exp(-w * w);
        }
      };

      var a = [], i;
      for (i = 0; i < n; ++i) a[i] = 0;
      for (i = 0; i < 5; ++i) bump(a);
      return a.map(function(d, i) { return {x: i, y: Math.max(0, d)}; });
    };

    var n = 20, // number of layers
    m = 200, // number of samples per layer
    stack = d3.layout.stack().offset("wiggle"),
    layers0 = stack(d3.range(n).map(function() { return bumpLayer(m); })),
    layers1 = stack(d3.range(n).map(function() { return bumpLayer(m); }));

    d3.select(this.el).remove();

    var x = d3.scale.linear()
      .domain([0, m - 1])
      .range([0, this.width]);

    var y = d3.scale.linear()
      .domain([0, d3.max(layers0.concat(layers1), function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); })])
      .range([this.height, 0]);

    var margin = this.margin;
    var minDate = this.minDate;
    var maxDate = this.maxDate;

    var chart = d3.select(this.el)
        .attr('width', this.width + this.margin.right + this.margin.left)
        .attr('height', this.height + this.margin.top + this.margin.bottom);

    var g = chart.append('svg:g')
        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    var color = d3.scale.linear()
        .range(["#aad", "#556"]);

    var area = d3.svg.area()
        .x(function(d) { return x(d.x); })
        .y0(function(d) { return y(d.y0); })
        .y1(function(d) { return y(d.y0 + d.y); });

    chart.selectAll("path")
        .data(layers0)
      .enter().append("path")
        .attr("d", area)
        .style("fill", function() { return color(Math.random()); });

    return chart;
  }

});