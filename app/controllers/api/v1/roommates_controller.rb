class Api::V1::RoommatesController < ApplicationController

  def index
    @roommates = Roommate.all
    render json: @roommates
  end

  def show
    @roommate = Roommate.find(params[:id])
    render json: @roommate
  end

  def create
    @roommate = Roommate.create(roommate_params)
    render json: @roommate
  end

  def update
    @roommate = Roommate.find(params[:id])
    @roommate.update(roommate_params)
    render json: @roommate
  end

  def destroy
    @roommate = Roommate.find(params[:id])
    @roommate.destroy()
    render json: 'delete'
  end

  private
  def roommate_params
    params.permit(:first_name, :last_name, :email, :password, :apartment_id)
  end


end
