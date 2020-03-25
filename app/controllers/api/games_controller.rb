
class Api::GamesController < ApplicationController

  def index
    @games = Game.all
    render :index
  end

  def show
    @game = Game.find_by(id: params[:id])
    render :show
  end

  def create
    @game = Game.new(game_params)
    if @game.save
      render :show
    else
      render json: @game.errors.full_messages, status: 422
    end
  end

  private

  def game_params
    params.require(:game).permit(:num_players, :private, :name, :creator_id, :password_digest)
  end
end
