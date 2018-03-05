class Article < ActiveRecord::Base
  rails_admin do
    include_all_fields
    
    #exclude_fields  :sort, :updated_at, :created_at, :slave, :review, :url, :portfolio

    edit do
      # For RailsAdmin >= 0.5.0
      field :description, :ck_editor
      # For RailsAdmin < 0.5.0
      # field :description do
      #   ckeditor true
      # end
    end
  end
end
