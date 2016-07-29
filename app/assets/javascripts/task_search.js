App.TaskSearch = (function () {
  var TS = function TaskSearch (collection) {
    this.collection = collection
    _.extend(collection, FilterableCollectionMixin)
    this.filteredCollection = collection.filtered(function (task) {
      return true
    })
    return this
  }

  TS.prototype.attach = function (container) {
    this.container = container
    this.visualSearch = VS.init({
      container : container,
      query : '',
      callbacks : {
        search: this.search.bind(this),
        facetMatches: this.facetMatches.bind(this),
        valueMatches: this.valueMatches.bind(this)
      }
    })
  }

  TS.prototype.search = function (query, searches) {
    var self = this
    this.filteredCollection.refilter(function (task) {
      return searches.all(function (search) {
        return self.matchSearch(task, search)
      })
    })
  }

  TS.prototype.matchSearch = function (task, search) {
    var field = search.get('category')
    var searchValue = search.get('value')
    var self = this

    switch (field) {
      case 'completed':
        return searchValue == task.isComplete().toString()
      case 'assignees':
        return task.assignedUsers.any(function (user) {
          return user.get('email').indexOf(searchValue) > -1
        })
      default:
        return task.get(field).indexOf(searchValue) > -1
    }
  }

  TS.prototype.facetMatches = function (callback) {
    callback(['title', 'assignees', 'completed'])
  }

  TS.prototype.valueMatches = function (facet, term, callback) {
    switch (facet) {
      case 'title':
        callback(_.uniq(this.collection.pluck('title')))
        break
      case 'assignees':
        callback(_.uniq(_.flatten(this.collection.map(function (task) {
          return task.assignedUsers.pluck('email')
        }))))
        break
      case 'completed':
        callback(['true', 'false'])
        break
    }
  }

  return TS
})()
