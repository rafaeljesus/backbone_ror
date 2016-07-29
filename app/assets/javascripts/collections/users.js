App.Collections.Users = Backbone.Collection.extend({
  model: App.Models.User,

  findByEmail: function (email) {
    return this.find(function (user) {
      return user.get('email') == email
    })
  }
})
