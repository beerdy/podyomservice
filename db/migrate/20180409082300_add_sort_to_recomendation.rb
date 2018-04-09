class AddSortToRecomendation < ActiveRecord::Migration
  def change
    add_column :recomendations, :sort, :integer
  end
end
