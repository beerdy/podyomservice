class WedosController < ApplicationController
  before_action :set_wedo, only: [:show, :edit, :update, :destroy]

  # GET /wedos
  # GET /wedos.json
  def index
    @wedos = Wedo.all
  end

  # GET /wedos/1
  # GET /wedos/1.json
  def show
  end

  # GET /wedos/new
  def new
    @wedo = Wedo.new
  end

  # GET /wedos/1/edit
  def edit
  end

  # POST /wedos
  # POST /wedos.json
  def create
    @wedo = Wedo.new(wedo_params)

    respond_to do |format|
      if @wedo.save
        format.html { redirect_to @wedo, notice: 'Wedo was successfully created.' }
        format.json { render :show, status: :created, location: @wedo }
      else
        format.html { render :new }
        format.json { render json: @wedo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /wedos/1
  # PATCH/PUT /wedos/1.json
  def update
    respond_to do |format|
      if @wedo.update(wedo_params)
        format.html { redirect_to @wedo, notice: 'Wedo was successfully updated.' }
        format.json { render :show, status: :ok, location: @wedo }
      else
        format.html { render :edit }
        format.json { render json: @wedo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /wedos/1
  # DELETE /wedos/1.json
  def destroy
    @wedo.destroy
    respond_to do |format|
      format.html { redirect_to wedos_url, notice: 'Wedo was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_wedo
      @wedo = Wedo.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def wedo_params
      params.require(:wedo).permit(:title, :description, :slave, :image_uid, :url)
    end
end
