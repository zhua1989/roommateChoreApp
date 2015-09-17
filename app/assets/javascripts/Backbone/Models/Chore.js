var ChoreApp = ChoreApp || {models: {}, collections: {}, views: {}}

ChoreApp.models.Chore = Backbone.Model.extend({
  initialize: function(){
    console.log("made a chore here at Chore.js")
  },
  urlRoot: "/api/v1/chores"

});


