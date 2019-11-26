class CreateApartments < ActiveRecord::Migration[6.0]
  def change
    create_table :apartments do |t|
      t.string :address
      t.integer :zipcode
      t.string :city
      t.integer :user_id
      t.string :state

      t.timestamps
    end
  end
end
