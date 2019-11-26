class ApartmentsController < ApplicationController
    def index
        all_apartments = Apartment.all
        render json: all_apartments
    end
end
