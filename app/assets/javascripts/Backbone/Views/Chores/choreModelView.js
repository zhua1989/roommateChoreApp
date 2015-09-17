var ChoreApp = ChoreApp || {models: {}, collections: {}, views: {}}

ChoreApp.views.ChoreView = Backbone.View.extend({
    initialize: function(){
      this.listenTo(this.model, "change", this.render),
      this.listenTo( this.model, "destroy", this.remove );
    },
    model: ChoreApp.models.Chore,
    //------------Specify Tagname of Element To be Rendered ---------------//
    tagname: "li", 
    events: {
      "click #destroy": "handleDestroy"
    },
    template: _.template($('#my-chores').html()),
    
    render: function(){
      this.$el.empty();
      this.$el.html(this.model.attributes);
      return this
    },

    handleDestroy: function(){
      this.model.destroy()
    }

})