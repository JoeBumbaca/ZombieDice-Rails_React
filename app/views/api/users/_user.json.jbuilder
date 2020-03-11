json.extract! user, :id, :username

json.stats do 
  json.extract! user.stat_sheet, :num_games, :num_wins, :pic_id, :best_round, :fastest_win
end
