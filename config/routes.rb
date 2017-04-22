Rails.application.routes.draw do
  root "home#index"

  resource :home

  resources :users, only: [:show]

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :matches, only: [:index, :create]
    end
  end

end
