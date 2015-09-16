class CreateApartments < ActiveRecord::Migration
  def change
    create_table :apartments do |t|
      t.string :address

      t.timestamps null: false
    end
  end
end
