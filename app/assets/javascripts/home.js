$(function(){

//------------------------MODEL-----------------------//
var ChoreModel = Backbone.Model.extend({
  initialize: function(){
    console.log("made a chore here at Chore.js")
  },
  urlRoot: "/api/v1/chores"  
});

//------------------------MODEL VIEW------------------//
var ChoreModelView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, "change", this.render);
    this.listenTo(this.model, "destroy", this.remove );
    this.template = _.template($('#my-chores').html());
  },
  model: ChoreModel,
  //------------Specify Tagname of Element To be Rendered ---------------//
  tagname: "li", 
  events: {
    "click #destroy": "handleDestroy"
  },
  
  render: function(){
    this.$el.empty();
    this.$el.html(this.model.attributes);
    return this
  },
  handleDestroy: function(){
    this.model.destroy()
  }
});


//-----------------------ChoreCollection---------------//
var ChoreCollection = Backbone.Collection.extend({
  model: ChoreModel,
  url: "/api/v1/chores", 
  initialize: function() {
      console.log("collection has been created in choreCollection.js file");   
  }
})

//--------------------------CollectionView----------------//
var ChoreCollectionView = Backbone.View.extend({
  initialize: function(){
  this.collection.fetch();
  this.listenTo(this.collection, 'add', this.render);
  this.listenTo(this.collection, "change", this.logChange);
  console.log(this.collection.models)
  },

  el: $("#chore-list"),

  render: function(){
    _.each(this.collection.models, function(chore){
      var choreView = new ChoreModelView({model:chore});
      
      this.$el.append(choreView.render());
      
    }.bind(this))
  }

})




//------------------------Instantiations-------------------//

var firstCollection = new ChoreCollection({})
var fristCollectionView = new ChoreCollectionView({
  collection: firstCollection
})





})