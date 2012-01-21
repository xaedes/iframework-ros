// Module is used for Iframework.Library and has info about ins and outs
// Node is used by Graph, and has info about x, y, w, h

$(function(){

  Iframework.Module = Backbone.Model.extend({
    defaults: {
      "src": "",
      "info": {},
      "inputs": [],
      "outputs": []
    },
    initialize: function () {
    },
    initializeView: function () {
      if (!this.view) {
        this.view = new Iframework.ModuleView({model:this});
      }
      return this.view;
    },
    toJSON: function () {
      return {
        "src": this.get("src"),
        "info": this.get("info"),
        "inputs": this.get("inputs"),
        "outputs": this.get("outputs")
      };
    }
  });
  
  Iframework.Modules = Backbone.Collection.extend({
    model: Iframework.Module,
    findOrAdd: function (node) {
      var module;
      module = this.find(function(module){
        return module.get("src") === node.get("src");
      })
      if (!module) {
        module = new Iframework.Module({"node":node});
        this.add(module);
      }
      return module;
    }
  });

});
