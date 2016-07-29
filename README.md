Todo app in Backbone.js and Rails
================================

* It's a well test Rails 3.2 and Backbone.js Todo application.

Running the app
---------------
Make sure you're running Ruby 1.9 (there's a .ruby-version file that should be
read by rvm or rbenv) and then:

    bundle
    bundle exec rake db:create db:migrate
    bundle exec rails server

Open on http://localhost:3000

Running the tests
-----------------

The first time, create the test database:

    bundle exec rake db:test:prepare

There are three sets of tests: Cucumber integration tests, RSpec isolation
specs for Rails components, and Jasmine isolation specs for Backbone
components.

Run them all at once:

    bundle exec rake

Or one at a time

    bundle exec rake cucumber
    bundle exec rake spec
    bundle exec rake jasmine:ci

To interactively run the Jasmine specs several times (for example, while
developing), run `bundle exec rake jasmine` and visit http://localhost:8888 to
view the suite.

## Contributing
- Fork it
- Create your feature branch (`git checkout -b my-new-feature`)
- Commit your changes (`git commit -am 'Add some feature'`)
- Push to the branch (`git push origin my-new-feature`)
- Create new Pull Request

### Maintaners

* [Rafael Jesus](https://github.com/rafaeljesus)
