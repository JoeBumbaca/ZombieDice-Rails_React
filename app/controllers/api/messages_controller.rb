class Api::MessagesController < ApplicationController

  def show
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      render :show
    else
      render json: {}
    end
  end

  private

  def message_params
    params.require(:message).permit(:user_id, :game_id, :body, :user_name)
  end

end
