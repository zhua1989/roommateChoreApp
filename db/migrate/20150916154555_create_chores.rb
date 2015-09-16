class CreateChores < ActiveRecord::Migration
  def change
    create_table :chores do |t|
      t.string :task_name
      t.boolean :completed
      t.boolean :assigned
      t.string :assignee
      t.references :roommate, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
