class Api::UserStatsController < ApplicationController
   def create
    @user_stats = UserStat.new(user_stat_params)

    if @user_stats.save
      render "api/users/show"
    end
  end

  def user_stat_params
    params.require(:user_stats).permit(:user_id)
  end
end
