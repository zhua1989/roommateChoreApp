var ChoreApp = ChoreApp || {models: {}, collections: {}, views: {}}
$(document).ready(function(){
  console.log('ok')
  ChoreApp.initialize();
});

ChoreApp.initialize = function(){
var choreCollection = new ChoreApp.collections.choreCollection({})

var choreListView = new ChoreApp.views.ChoreListView ({
  collection: choreCollection,
  // el: $('#chore-list')
})
console.log(":LSKDJF:DSLKJF")
}



