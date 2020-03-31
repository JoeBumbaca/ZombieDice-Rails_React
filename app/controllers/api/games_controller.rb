
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
      socket =  { id: @game.id,
                  creator_id: @game.creator_id,
                  num_players: @game.num_players,
                  private: @game.private,
                  name: @game.name,
                  password_digest: @game.password_digest
                  }
      ActionCable.server.broadcast("lobby", socket)
    else
      render json: @game.errors.full_messages, status: 422
    end
  end

  def destroy
    @game = Game.find(params[:id])
    @game.destroy
    render json: @game
  end

  private

  def game_params
    params.require(:game).permit(:num_players, :private, :name, :creator_id, :password_digest)
  end
end
