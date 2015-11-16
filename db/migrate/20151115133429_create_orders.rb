class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :location
      t.string :user_id
      t.string :price
      t.timestamps null: false
    end
  end
end
