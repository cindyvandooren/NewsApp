NewsReader.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.collection = options.collection,
    this.$rootEl = options.rootEl
  },

  routes: {
    "": "feedIndex",
    "feeds/new": "feedNew",
    "feeds/:id": "feedShow"
  },

  feedIndex: function () {
    this.collection.fetch();
    var indexView = new NewsReader.Views.FeedIndex({collection: this.collection});
    this.$rootEl.html(indexView.render().$el);
    this._swapView(indexView);
  },

  feedShow: function (id) {
    var feed = this.collection.getOrFetch(id);
    var showView = new NewsReader.Views.FeedShow({model: feed})
    this.$rootEl.html(showView.render().$el);
    this._swapView(showView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }

});
