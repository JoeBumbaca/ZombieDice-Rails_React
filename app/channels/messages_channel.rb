class MessagesChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    # debugger
    stream_from "game_room-#{params["room"]}:messages"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
