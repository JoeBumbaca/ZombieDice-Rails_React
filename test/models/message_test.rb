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
require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
