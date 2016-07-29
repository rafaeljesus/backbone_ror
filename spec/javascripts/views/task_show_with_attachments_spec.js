//= require application

describe('App.Views.TaskShow for a task with attachments', function () {
  var task
  var view
  var $el
  var blueberryUrl
  var strawberryUrl

  beforeEach(function () {
    blueberryUrl = 'http://whatscookingamerica.net/Fruit/Blueberries4.jpg'
    strawberryUrl = 'http://strawberriesweb.com/three-strawberries.jpg'
    task = new App.Models.Task({
      id: 1,
      title: 'Buy pies',
      attachments: [
        {
          upload_file_name: 'blueberries.jpg',
          upload_url: blueberryUrl
        },
        {
          upload_file_name: 'strawberries.jpg',
          upload_url: strawberryUrl
        }
      ]
    })

    view = new App.Views.TaskShow({model: task})
    $el = $(view.render().el)
  })

  it('displays attachments', function () {
    expect($el).toContain(".attachments img[src='' + blueberryUrl + '']")
    expect($el).toContain(".attachments img[src='' + strawberryUrl + '']")
  })

  it('displays attachment filenames', function () {
    var attachments = $el.find('.attachments p')
    expect(attachments.first()).toHaveText('Attached: blueberries.jpg')
    expect(attachments.last()).toHaveText('Attached: strawberries.jpg')
  })
})
