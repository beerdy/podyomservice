class CreateSocials < ActiveRecord::Migration
  def change
    create_table :socials do |t|
      t.string :title
      t.text :description
      t.string :slave
      t.string :image_uid

      t.timestamps null: false
    end
  end
end
