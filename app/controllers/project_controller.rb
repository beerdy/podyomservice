class ProjectController < ApplicationController
  def index
    @wedos = Wedo.all
  end
end
