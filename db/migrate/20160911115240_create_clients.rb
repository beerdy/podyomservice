class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :title
      t.text :description
      t.string :slave
      t.string :image_uid

      t.timestamps null: false
    end
  end
end
