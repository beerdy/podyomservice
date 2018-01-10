class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :title
      t.text :description
      t.string :slave
      t.string :image_uid
      t.string :url

      t.timestamps null: false
    end
  end
end
