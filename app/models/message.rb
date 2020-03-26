# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  game_id    :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Message < ApplicationRecord

  validates :user_id, :game_id, :body, presence: true

  belongs_to :user,
  class_name: :User,
  foreign_key: :user_id

  belongs_to :game,
  class_name: :Game,
  foreign_key: :game_id

end
