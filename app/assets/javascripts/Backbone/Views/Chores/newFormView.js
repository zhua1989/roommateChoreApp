var newFormView = Backbone.View.extend({
    initialize: function(){

    }
})
var FormView = Backbone.View.extend({
  el: $('#new-chore-form'),
  initialize: function() {
    this.$task_name = this.$el.find('#client-field');
    this.$amountInput = this.$el.find('#amount-field');
  },
  events: {
    'click button': 'createNewDebt'
  },
  createNewDebt: function(event){
    event.preventDefault();
    var debt = new Debt({
      client: this.$clientInput.val(),
      amount: this.$amountInput.val()
    });

    console.log('Making dollar dollar bills yo!');

    debt.save().done(function(debt){
        console.log('console log it yo. Success!')
        debts.add(debt);
      });

  }
});


var addContactForm = Backbone.View.extend({
  initialize: function(options){
    this.collection = options.collection
  },
  events: {
    "submit": "addContactToCollection"
  },
  addContactToCollection: function(){
    console.log("is this firing?")
    event.preventDefault();
    var contactName = $(".name").val()
    var contactEmail = $(".email").val()
    var contactAge = $(".age").val()
    var contact = new Contact({
      name: contactName,
      email: contactEmail,
      age: contactAge
    });
    this.collection.create(contact);
    console.log(this.collection.models)
  }
})