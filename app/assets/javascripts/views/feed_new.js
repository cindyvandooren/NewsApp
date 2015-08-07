NewsReader.Views.FeedNew = Backbone.View.extend({
  template: JST["feed_new"],

  tagName: 'form',

  events: {
    "click .new" : "addNewFeed"
  },

  render: function () {
    var content = this.template({model: this.model});
    this.$el.html(content);
    return this;
  },

  addNewFeed: function (event) {
    event.preventDefault();
    var formdata = $(event.currentTarget).serializeJSON();
    this.model.save(formdata, {
      success: function () {
        this.collection.add(this.model);
        var url = '#/feeds/' + this.model.escape('id');
        Backbone.history.navigate(url, {trigger: true});
      }
    }.bind(this));
  }
});
