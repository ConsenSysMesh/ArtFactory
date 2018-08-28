FlowRouter.route('/', {
    action: function(params, queryParams) {
      BlazeLayout.render('layout1', { main: "home" });
    }
});

FlowRouter.route('/upload', {
    action: function(params, queryParams) {
      BlazeLayout.render('layout1', { main: "publish" });
    }
});

FlowRouter.route('/content', {
    action: function(params, queryParams) {
      BlazeLayout.render('layout1', { main: "publications" });
    }
});