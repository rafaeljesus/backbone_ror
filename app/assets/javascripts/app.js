window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function (data) {
    this.tasks = new App.Collections.Tasks(data.tasks)
    this.users = new App.Collections.Users(data.users)

    new App.Routers.Tasks({collection: this.tasks, users: this.users})

    if (!Backbone.history.started) {
      Backbone.history.start()
      Backbone.history.started = true
    }
  }
}
