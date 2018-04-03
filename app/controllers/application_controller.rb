class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  def initialize
    super
    social =  Social.all
    
    @social_f = social[2]
    @social_t = social[1]
    @social_v = social[0]

    @articles =  Article.all
    
    content_read
    services_read
  end

  private
  def services_read
    @services = []
    Service.all.each do |s|
      s.sort = 9999 unless s.sort
      @services.push s
    end
    @services.sort_by!(&:sort)
  end

  def content_read
    @articles.each do |c|
      @map = c if c.url == 'map'
      @head_title = c if c.url == 'head_title'
      @footer = c.description.html_safe if c.url == 'footer'
      @allservice = c if c.url == 'allservice'
    end
  end
end
