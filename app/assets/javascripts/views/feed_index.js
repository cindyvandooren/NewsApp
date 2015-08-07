NewsReader.Views.FeedIndex = Backbone.View.extend({
  template: JST["feed_index"],
  tagName: 'ul',

  initialize: function (options) {
    this.listenTo(this.collection, 'sync remove', this.render);
  },

  events: {
    "click .delete" : "deleteFeed"
  },

  render: function () {
    var content = this.template({feeds: this.collection});
    this.$el.html(content);
    return this;
  },

  deleteFeed: function (event) {
    var collection = this.collection;
    event.preventDefault();
    var $deleteButton = $(event.currentTarget);
    var id = $deleteButton.data('id');
    var feed = this.collection.get(id);
    feed.destroy({
      success: function () {
        // collection.remove({id: id});
      }
    });
  }
});
