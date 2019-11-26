# Learn React in Rails + Auth (Devise)

## Installation

## Resources

[https://github.com/learn-academy-2019-delta/exercise-apartment-app](https://github.com/learn-academy-2019-delta/exercise-apartment-app)


[https://github.com/learn-academy-2019-echo/Syllabus/tree/master/React_in_Rails_Apartment_App](https://github.com/learn-academy-2019-echo/Syllabus/tree/master/React_in_Rails_Apartment_App)

```sh
//INITIAL RAILS APP W/ POSTGRES & RSPEC
rails new apartment_learn -T --database=postgresql
rails db:create
echo "gem 'rspec-rails', groups: [:development, :test]" >> Gemfile
bundle install

//REACT
rails g rspec:install
bundler add react-rails
bundle install
rails webpacker:install
rails webpacker:install:react
rails g react:install
rails g react:component App
rails g controller Pages  //add in files to route your App.js

//DEVISE
bundle add devise
rails g devise:install
rails g devise User
rails db:migrate

//Bootstrap
bundle add bootstrap
mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
yarn add reactstrap

//Jest & Enzyme
yarn add jest
yarn add -D enzyme react-test-renderer enzyme-adapter-react-16

//Add columns to users & signup
rails g migration add_user_info_to_users name:string phone:string hours:string
rails db:migrate
rails generate devise:views users


//Apartments Resources
rails generate resource Apartment address:string zipcode:integer city:string user_id:integer state:string
rails db:migrate
```
