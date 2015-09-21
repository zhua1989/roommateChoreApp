class Api::V1::ChoresController < ApplicationController

  def index
    @chores = Chore.all
    render json: @chores
  end

  def show
    @chore = Chore.find(params[:id])
    render json: @chore
  end

  def create
    @chore = Chore.create(chore_params)
    render json: @debt
  end

  def update
    @chore = Chore.find(params[:id])
    @chore.update(chore_params)
    render json: @chore
  end

  def destroy
    @chore = Chore.find(params[:id])
    @chore.destroy
    render json: 'delete'
  end

  private
  def chore_params
    params.permit(:task_name, :completed, :assigned, :assignee, :roommate_id)
  end


end