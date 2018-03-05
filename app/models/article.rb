class Article < ActiveRecord::Base
  rails_admin do
    include_all_fields
    
    #exclude_fields  :sort, :updated_at, :created_at, :slave, :review, :url, :portfolio

    edit do
      field :description, :rich_editor do
        config({
          :insert_many => true
        })
      end
      field :slave, :rich_editor do
        config({
          :insert_many => true
        })
      end
    end

    edit do
      # For RailsAdmin >= 0.5.0
      field :slave, :ck_editor
      # For RailsAdmin < 0.5.0
      # field :description do
      #   ckeditor true
      # end
    end
  end
end
