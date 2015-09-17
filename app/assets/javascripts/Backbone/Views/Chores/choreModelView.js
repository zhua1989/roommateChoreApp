var Choreapp.Views.ChoreView = Backbone.Views.extend({
    initialize: function({
      this.listen(this.model, "change", this.render),
      this.listenTo( this.model, "destroy", this.remove );

    })



    render: function({
      
    })
})