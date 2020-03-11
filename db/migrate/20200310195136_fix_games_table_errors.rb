class FixGamesTableErrors < ActiveRecord::Migration[5.2]
  def change
    remove_column :games, :password_digest
    add_column :games, :password_digest, :string
  end
end
