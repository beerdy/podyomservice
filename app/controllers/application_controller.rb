class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  def initialize
    super
    social =  Social.all
    @articles =  Article.all
    @services = Service.all
    
    @social_f = social[2]
    @social_t = social[1]
    @social_v = social[0]
  end
  private 
  def content_read
    @articles.each do |c|
      @map = c if c.url == 'map'
      @head_title = c if c.url == 'head_title'
      @footer = c.description.html_safe if c.url == 'footer'
    end
  end
end
