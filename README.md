# Learn React in Rails + Auth (Devise)

## Installation

## Resources

[https://github.com/learn-academy-2019-delta/exercise-apartment-app](https://github.com/learn-academy-2019-delta/exercise-apartment-app)


[https://github.com/learn-academy-2019-echo/Syllabus/tree/master/React_in_Rails_Apartment_App](https://github.com/learn-academy-2019-echo/Syllabus/tree/master/React_in_Rails_Apartment_App)

```sh
rails new apartment_learn -T --database=postgresql
rails db:create
echo "gem 'rspec-rails', groups: [:development, :test]" >> Gemfile
bundle install

rails generate rspec:install
bundler add react-rails
bundle install
rails webpacker:install
rails webpacker:install:react
rails g react:install
rails g react:component App
rails g controller Pages  //add in files to route your App.js
```
