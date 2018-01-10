class AboutController < ApplicationController
  def index
    @aboutus = Article.find(4)
    @choseus = Choseu.all
    @teams   = Team.all
  end
end
