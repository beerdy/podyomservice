class AddSortToService < ActiveRecord::Migration
  def change
    add_column :services, :sort, :integer
  end
end
