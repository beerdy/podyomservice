class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :contact
      t.string :subject
      t.string :message

      t.timestamps null: false
    end
  end
end
