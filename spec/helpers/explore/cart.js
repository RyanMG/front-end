this["compTemplates"] = this["compTemplates"] || {};

this["compTemplates"]["spec/hbs/explore/cart.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h4 class=\"text-center panel-title\">Column Cart</h4>\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"cart-text col-sm-12\">\n      <p>Total Columns Selected: <span class=\"total-columns-added\">0</span></p>\n    </div>\n    <div class=\"row\">\n      <div class=\"clear-button col-md-6 text-center\">\n        <button id=\"clear\" class=\"btn btn-sm btn-success\">Clear</button>\n      </div>\n      <div class=\"go-button col-md-6 text-center\">\n        <button id=\"go\" class=\"btn btn-sm btn-success\">Go!</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"panel panel-default selected-columns\">\n  <div class=\"panel-heading\">\n    <h4 class=\"text-center panel-title\">Selected Columns</h4>\n  </div>\n  <div class=\"panel-body\">\n    <ul id=\"selectedColumns\" class=\"list-group\">\n      <li class=\"list-group-item\">No Columns Selected</li>\n    </ul>\n  </div>\n</div>";
  });