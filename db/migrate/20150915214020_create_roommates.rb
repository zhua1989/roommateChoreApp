class CreateRoommates < ActiveRecord::Migration
  def change
    create_table :roommates do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.references :apartment, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
