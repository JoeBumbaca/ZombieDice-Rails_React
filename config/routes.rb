Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :user_stats, only: [:create, :destroy, :update]
    resources :games, only: [:create, :show, :index, :destroy]
  end

end
