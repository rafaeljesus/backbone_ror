App.Models.Task = Backbone.Model.extend({
  urlRoot: '/tasks',

  initialize: function () {
    this.on('change:attachments', this.parseAttachments)
    this.on('change:assigned_users', this.parseAssignedUsers)
    this.parseAttachments()
    this.parseAssignedUsers()
  },

  parseAttachments: function () {
    var attachmentsAttr = this.get('attachments')
    this.attachments = new App.Collections.Attachments(attachmentsAttr)
  },

  parseAssignedUsers: function () {
    var usersAttr = this.get('assigned_users')
    this.assignedUsers = new App.Collections.Users(usersAttr)
  },

  isComplete: function () {
    return this.get('complete')
  },

  toJSON: function () {
    var json = _.clone(this.attributes)
    json.assignments_attributes = this.assignedUsers.map(function (user) {
      return { user_id: user.id }
    })
    return json
  }
})
