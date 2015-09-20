var ChoreApp = ChoreApp || {models: {}, collections: {}, views: {}}

 ChoreApp.views.ChoreListView = Backbone.View.extend({
    initialize: function(){
    this.collection.fetch();
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, "change", this.logChange);
    console.log(this.collection.models)
    },

    // el: $("#chore-list"),

    addOne: function(chore) {
      console.log('Make it rain!');
      var choreView = new ChoreApp.views.ChoreView({model: chore});
      this.$el.append(choreView.render().el);
      $("#chore-list").append(this.$el)
      
    },

    render: function(){
      var _this = this;
      console.log(ChoreApp.views)
      _.each(this.collection.models, function(chore){
        var choreView = new ChoreApp.views.ChoreView({model:chore});
        _this.$el.append(choreView.render().template(chore.attributes));
        // $("#chore-list").append(this.$el)
      }.bind(this))
    }
})