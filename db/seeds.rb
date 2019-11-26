# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users_data = [
    { name: "Ben", email: "Panthera@gmail.com", phone: "4127356666", password: "123456" },
    { name: "Jamie", email: "Banthera@gmail.com", phone: "4124446666", password: "123456" },
    { name: "Julie", email: "Janthera@gmail.com", phone: "8884446666", password: "123456" },
    { name: "Jane", email: "Aanthera@gmail.com", phone: "5554446666", password: "123456" },
    { name: "Bunny", email: "Uanthera@gmail.com", phone: "8889876666", password: "123456" }
]

users_data.each do |data|
    User.create(data)
end

id1 = User.all[0].id
id2 = User.all[4].id

apartment_data = [
    {address: "123 Easy Street", zipcode: "90210", user_id: id1, state: "CA"},
    {address: "1243 Neptune", zipcode: "92002", user_id: id1, state: "CA"},
    {address: "903 E st", zipcode: "92012", user_id: id1, state: "CA"},
    {address: "66 Hard Street", zipcode: "15292", user_id: id2, state: "PA"},
    {address: "198 Kleptune", zipcode: "15210", user_id: id2, state: "PA"},
    {address: "903 F st", zipcode: "15302", user_id: id2, state: "PA"}
]

apartment_data.each do |data|
    Apartment.create(data)
end
