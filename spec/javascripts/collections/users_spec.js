describe('App.Collections.Users', function () {
  it('contains instances of App.Models.User', function () {
    var collection = new App.Collections.Users()
    expect(collection.model).toEqual(App.Models.User)
  })
})
