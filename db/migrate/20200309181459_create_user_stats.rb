class CreateUserStats < ActiveRecord::Migration[5.2]
  def change
    create_table :user_stats do |t|
      t.integer :user_id, null: false
      t.integer :pic_id, default: 1
      t.integer :num_games, default: 0
      t.integer :num_wins, default: 0
      t.integer :best_round, default: 0
      t.integer :fastest_win, default: 0
      t.timestamps
    end

    add_index :user_stats, :user_id, unique: true
  end
end
