class ApartmentsController < ApplicationController
    def index
        all_apartments = Apartment.all
        byebug
        render json: all_apartments
    end
end
