var ChoreApp = ChoreApp || {models: {}, collections: {}, views: {}}

ChoreApp.initialize = function(){
var choreCollection = new ChoreApp.collections.choreCollection({

})

var choreListView = new Choreapp.Views.ChoreListView ({
  collection: choreCollection,
  el: $('#chore-list')
})

choreCollection.fetch()

}


$(function(){
  ChoreApp.initialize();
});
