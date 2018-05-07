require 'rss'
require 'open-uri'

class WelcomeController < ApplicationController
  def index
    @services   = Service.all

    @sliders    = Slider.all
    @clients    = Client.all
    #@news       = New.last(3)

    #result = Net::HTTP.get(URI.parse('http://www.gosnadzor.ru/news/rss/'))
    #@feed = SimpleRSS.parse open('http://www.gosnadzor.ru/news/rss/') 
    @feed = RSS::Parser.parse(open(@rss.description).read, false).items[0..Integer(@rss.image_uid)]
  end

end
########