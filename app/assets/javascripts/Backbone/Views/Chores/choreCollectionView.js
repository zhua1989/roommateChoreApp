var ChoreApp = ChoreApp || {models: {}, collections: {}, views: {}}

 ChoreApp.views.ChoreListView = Backbone.View.extend({
    initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, "change", this.logChange);
    this.collection.fetch();
    },

    el: $("#chore-list"),

    logChange: function(arg1, arg2){
      console.log(arg1,arg2)
    },

    render: function(model,collection){
      console.log(ChoreApp.views)
      var self = this;
      this.$el.empty();
      _.each(this.collection.models, function(chore){
        console.log(chore);
        var choreView = new ChoreApp.views.ChoreView({model:chore});
        self.$el.append( choreView.render().el );
      })
    }
})