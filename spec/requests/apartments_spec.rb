require 'rails_helper'

RSpec.describe "Apartments", type: :request do
    let!(:user){User.create(name: "Ben", email: "Panthera@gmail.com", phone: "4127356666", password: "123456")}
    let!(:apartment1){Apartment.create(address: "123 Easy Street", zipcode: "90210", user_id: user.id , state: "CA")}
    let!(:apartment2){Apartment.create(address: "456 Hard Street", zipcode: "15222", user_id: user.id, state: "PA")}

  describe "GET /apartments" do
    it "get all apartments" do
        headers = {
              "ACCEPT" => "application/json"
          }
      get apartments_path, headers: headers
      expect(response).to have_http_status(200)
    end
  end
end
