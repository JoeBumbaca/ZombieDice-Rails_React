
json.game do
  json.extract! @game, :id, :creator_id, :num_players, :private, :name, :message_ids
end
json.messages do
  @game.messages.each do |message|
    json.set! message.id do
      json.extract! message, :user_id, :game_id, :created_at, :body
    end
  end
end
