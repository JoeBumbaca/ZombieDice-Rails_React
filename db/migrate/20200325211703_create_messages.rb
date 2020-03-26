class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :user_id, null: false
      t.integer :game_id, null: false
      t.string :body, null: false
      t.timestamps
    end

    add_index :messages, :game_id
  end
end
