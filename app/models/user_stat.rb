# == Schema Information
#
# Table name: user_stats
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  pic_id      :integer          default("1")
#  num_games   :integer          default("0")
#  num_wins    :integer          default("0")
#  best_round  :integer          default("0")
#  fastest_win :integer          default("0")
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class UserStat < ApplicationRecord

  belongs_to :user,
  class_name: :User,
  foreign_key: :user_id
  
end
