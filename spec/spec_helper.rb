require 'rubygems'
require 'spork'

Spork.prefork do
  ENV['RAILS_ENV'] ||= 'test'

  require File.expand_path('../../config/environment', __FILE__)
  require 'rspec/rails'
  require 'paperclip/matchers'

  Dir[Rails.root.join('spec/support/**/*.rb')].each {|f| require f}

  RSpec.configure do |config|
    config.mock_with :rspec
    config.fixture_path = '#{::Rails.root}/spec/fixtures'
    config.use_transactional_fixtures = true
    config.include Paperclip::Shoulda::Matchers
  end

end

begin
  DatabaseCleaner.strategy = :truncation
rescue NameError
  raise 'You need to add database_cleaner to your Gemfile (in the :test group) if you wish to use it.'
end

Spork.each_run do
  DatabaseCleaner.clean
end
