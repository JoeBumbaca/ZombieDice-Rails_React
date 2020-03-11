@games.each do |game|
  json.set! game.id do
    json.extract! game, :id, :creator_id, :num_players, :private, :name
  end
end