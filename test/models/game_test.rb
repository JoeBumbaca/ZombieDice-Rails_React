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
require 'test_helper'

class GameTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
