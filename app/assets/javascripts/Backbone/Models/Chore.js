var ChoreApp = ChoreApp || {
    models: {},
    collections: {},
    views: {}
}

ChoreApp.models.Chore = Backbone.Model.extend({
    initialize: function() {
        console.log("made a chore here at Chore.js")
    },

    urlRoot: "/api/v1/chores",

    sayGoodBye: function() {
        console.log("This is the model speaking. say goodbye has been fired!");
        this.destroy({
            success: function(model, respose, options) {
                console.log("The model has been deleted from the server");
            },
            error: function(model, xhr, options) {
                console.log(xhr);
                console.log("Something went wrong while deleting the model");
            }
        })
    }
});
  