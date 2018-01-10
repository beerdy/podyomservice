class ChoseusController < ApplicationController
  before_action :set_choseu, only: [:show, :edit, :update, :destroy]

  # GET /choseus
  # GET /choseus.json
  def index
    @choseus = Choseu.all
  end

  # GET /choseus/1
  # GET /choseus/1.json
  def show
  end

  # GET /choseus/new
  def new
    @choseu = Choseu.new
  end

  # GET /choseus/1/edit
  def edit
  end

  # POST /choseus
  # POST /choseus.json
  def create
    @choseu = Choseu.new(choseu_params)

    respond_to do |format|
      if @choseu.save
        format.html { redirect_to @choseu, notice: 'Choseu was successfully created.' }
        format.json { render :show, status: :created, location: @choseu }
      else
        format.html { render :new }
        format.json { render json: @choseu.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /choseus/1
  # PATCH/PUT /choseus/1.json
  def update
    respond_to do |format|
      if @choseu.update(choseu_params)
        format.html { redirect_to @choseu, notice: 'Choseu was successfully updated.' }
        format.json { render :show, status: :ok, location: @choseu }
      else
        format.html { render :edit }
        format.json { render json: @choseu.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /choseus/1
  # DELETE /choseus/1.json
  def destroy
    @choseu.destroy
    respond_to do |format|
      format.html { redirect_to choseus_url, notice: 'Choseu was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_choseu
      @choseu = Choseu.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def choseu_params
      params.require(:choseu).permit(:title, :description, :slave, :image_uid, :url)
    end
end
