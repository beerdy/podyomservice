class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  def initialize
    super
    @services = Service.all
    @head_title = Article.find(1)
    @social_f = Social.find(3) 
    @social_t = Social.find(2)
    @social_v = Social.find(1)
    @footer   = Article.find(5).description.html_safe
  end
end
