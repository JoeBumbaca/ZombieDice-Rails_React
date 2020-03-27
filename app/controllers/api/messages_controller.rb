class Api::MessagesController < ApplicationController

  def show
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      socket =  { id: @message.id,
                  body: @message.body,
                  user_id: @message.user_id,
                  game_id: @message.game_id,
                  user_name: @message.user_name,
                  createdAt: @message.created_at
                  }
      ActionCable.server.broadcast("game_room-#{@message.game_id}:messages", socket)
    else
      render json: {}
    end
  end

  private

  def message_params
    params.require(:message).permit(:user_id, :game_id, :body, :user_name)
  end

end
