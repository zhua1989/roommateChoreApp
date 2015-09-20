var ChoreApp = ChoreApp || {models: {}, collections: {}, views: {}}


ChoreApp.views.FormView = Backbone.View.extend({
  initialize: function(options){
    this.collection = options.collection;
    console.log(this.collection);
    debugger
  },
  events: {
    "click #add-button": "addChoreToCollection"
  },
  addChoreToCollection: function(){
    console.log("is this firing?")
    event.preventDefault();
    var choreName = $("#task_name").val()
    var assignee = $("#assignee").val()
    var chore = new Chore({
      task_name: choreName,
      completed: false,
      assignee: assignee,
      
    });
    this.collection.create(contact);
    console.log(this.collection.models)
  }
})