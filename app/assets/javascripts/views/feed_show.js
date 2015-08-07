NewsReader.Views.FeedShow = Backbone.CompositeView.extend({
  template: JST["feed_show"],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
    //._entries is not accessible here. We built the entries function in the
    // feed model and use it here.
    this.listenTo(this.model.entries(), "add", this.addEntryView);
    this.model.entries().each(this.addEntryView.bind(this));
  },

  events: {
    "click .refresh-show-feed" : "refreshFeed"
  },

  render: function () {
    var content = this.template({ feed: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  refreshFeed: function () {
    this.model.fetch();
  },

  addEntryView: function (entry) {
    var subview = new NewsReader.Views.Entry({ model: entry });
    this.addSubview(".entries", subview);
  }
});
