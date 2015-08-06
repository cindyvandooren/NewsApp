NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST["feed_show"],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click .refresh-show-feed" : "refreshFeed"
  },

  render: function () {
    var content = this.template({feed: this.model});
    this.$el.html(content);
    return this;
  },

  refreshFeed: function () {
    this.model.fetch();
  }
});
