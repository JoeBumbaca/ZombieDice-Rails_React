class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :creator_id, null: false
      t.string :name, null: false
      t.integer :num_players, null: false
      t.boolean :private, default: false
      t.timestamps
    end
    
    add_index :games, :name, unique: true
  end
end
