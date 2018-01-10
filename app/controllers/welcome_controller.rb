class WelcomeController < ApplicationController
  def index
    @dear_user  = Article.find(2)
    @services   = Service.all

    @sliders    = Slider.all
    @clients    = Client.all
    @news       = New.last(3)
  end

end
