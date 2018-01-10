class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :title
      t.text :description
      t.string :address
      t.string :phone
      t.string :image_uid
      t.string :url

      t.timestamps null: false
    end
  end
end
