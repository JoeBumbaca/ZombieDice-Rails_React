# == Schema Information
#
# Table name: games
#
#  id              :bigint           not null, primary key
#  creator_id      :integer          not null
#  name            :string           not null
#  num_players     :integer          not null
#  private         :boolean          default("false")
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  password_digest :string
#
class Game < ApplicationRecord
  validates :num_players, :name, presence: true
end
