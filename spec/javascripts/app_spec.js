describe('App', function () {
  it('has a namespace for Models', function () {
    expect(App.Models).toBeTruthy()
  })

  it('has a namespace for Collections', function () {
    expect(App.Collections).toBeTruthy()
  })

  it('has a namespace for Views', function () {
    expect(App.Views).toBeTruthy()
  })

  it('has a namespace for Routers', function () {
    expect(App.Routers).toBeTruthy()
  })

  describe('initialize()', function () {
    it('accepts data JSON and instantiates a collection from it', function () {
      var data = {
        'tasks': [{'title':'thing to do'}, {'title':'another thing'}],
        'users': [{'id':'1','email':'alice@example.com'}]
      }
      App.initialize(data)

      expect(App.tasks).not.toEqual(undefined)
      expect(App.tasks.length).toEqual(2)
      expect(App.tasks.models[0].get('title')).toEqual('thing to do')
      expect(App.tasks.models[1].get('title')).toEqual('another thing')
      expect(App.users.length).toEqual(1)
    })

    it('instantiates a Tasks router', function () {
      sinon.spy(App.Routers, 'Tasks')
      App.initialize({})
      expect(App.Routers.Tasks).toHaveBeenCalled()
      App.Routers.Tasks.restore()
    })

    it('starts Backbone.history', function () {
      Backbone.history.started = null
      Backbone.history.stop()
      sinon.spy(Backbone.history, 'start')
      App.initialize({})

      expect(Backbone.history.start).toHaveBeenCalled()

      Backbone.history.start.restore()
    })
  })
})
