var ChoreApp = ChoreApp || {models: {}, collections: {}, views: {}}

ChoreApp.collections.choreCollection = Backbone.Collection.extend({
    model: ChoreApp.models.Chore,
    url: "/api/v1/chores", 
    initialize: function() {
        console.log("collection has been created in choreCollection.js file");   
    }
})

