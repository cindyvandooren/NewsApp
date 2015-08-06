window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new NewsReader.Routers.Router({
      collection: new NewsReader.Collections.Feeds(),
      rootEl: $("#content")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
