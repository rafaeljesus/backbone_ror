//= require application

describe('App.Views.TasksIndex', function () {
  it('renders a collection of tasks', function () {
    var tasksCollection = new App.Collections.Tasks()
    _.extend(tasksCollection, FilterableCollectionMixin)
    tasksCollection.reset([
      {title: 'Wake up'},
      {title: 'Brush your teeth'}
    ])

    var view = new App.Views.TasksIndex({collection: tasksCollection})
    var $el = $(view.render().el)

    expect($el).toHaveText(/Wake up/)
    expect($el).toHaveText(/Brush your teeth/)
  })
})
