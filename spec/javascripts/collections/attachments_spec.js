describe('App.Collections.Attachments', function () {
  it('contains instances of App.Models.Attachment', function () {
    var collection = new App.Collections.Attachments()
    expect(collection.model).toEqual(App.Models.Attachment)
  })

  it('is persisted at /attachments', function () {
    var collection = new App.Collections.Attachments()
    expect(collection.url).toEqual('/attachments')
  })
})
