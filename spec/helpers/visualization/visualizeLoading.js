this["compTemplates"] = this["compTemplates"] || {};

this["compTemplates"]["spec/hbs/visualization/visualizeLoading.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<div class=\"content\">\n  <div class=\"col-md-8 col-md-offset-2 verticalCenter\">\n    <h1 class=\"text-center\">Datsy is building your chart!</h1>\n    <h2 class=\"text-center text-muted\">Hold tight while we get your data...</h2><img src=\"images/loading.gif\" class=\"img-responsive\"/>\n  </div>\n</div>";
  });