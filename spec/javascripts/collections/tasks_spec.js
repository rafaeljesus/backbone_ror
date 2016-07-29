describe('App.Collections.Tasks', function () {
  it('contains instances of App.Models.Task', function () {
    var collection = new App.Collections.Tasks()
    expect(collection.model).toEqual(App.Models.Task)
  })

  it('is persisted at /tasks', function () {
    var collection = new App.Collections.Tasks()
    expect(collection.url).toEqual('/tasks')
  })
})
