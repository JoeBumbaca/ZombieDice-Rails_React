class AddUsernameToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :user_name, :string, null: false
  end
end
