var ChoreApp = ChoreApp || {models: {}, collections: {}, views: {}}
$(document).ready(function(){
  console.log('ok');
  ChoreApp.initialize();
});

ChoreApp.initialize = function(){
var choreCollection = new ChoreApp.collections.choreCollection({})
console.log(choreCollection.models)
var choreListView = new ChoreApp.views.ChoreListView ({
  collection: choreCollection,
  // el: $('#chore-list')
})
var myFormView = new ChoreApp.views.FormView({el: $("#entry-form"), collection: choreCollection});

console.log(":LSKDJF:DSLKJF")
}



