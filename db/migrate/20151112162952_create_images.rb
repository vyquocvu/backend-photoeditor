class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :location
      t.string :user_id
      t.timestamps null: false
    end
  end
end
