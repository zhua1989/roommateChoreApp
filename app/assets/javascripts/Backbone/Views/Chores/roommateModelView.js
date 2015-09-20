var ChoreApp = ChoreApp || {models: {}, collections: {}, views: {}}

ChoreApp.views.RoommateView = Backbone.View.extend({
    initialize: function(){
      this.listenTo(this.model, "change", this.render);
      this.listenTo(this.model, "sync destroy", this.remove);
      this.template = _.template($('#my-chores').html());
    },
    model: ChoreApp.models.Chore,
    //------------Specify Tagname of Element To be Rendered ---------------//
    tagname: "li", 
    events: {
      
    },
    
    render: function(){
      this.$el.empty();
      this.$el.html(this.template(this.model.attributes));
      return this
    },

    // handleEdit: function(){
    //   this.$el.append($("#edit-form").text())
    // },

    // handleDestroy: function(e){
    //   e.preventDefault();
    //   this.model.destroy();
    //   this.model.sayGoodBye();
    //   console.log("Delete please")
    // },

    // //---------------------Update Function---------------------------------//

    handleUpdate: function(){
      var updatedTaskName = $("#task_name").val();
      var updatedAssignee = $("#assignee").val();
      this.model.set({task_name:updatedTaskName, assignee: updatedAssignee});
    }

})