Rails.application.routes.draw do
  root "home#index"

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :matches, only: [:index, :create]
    end
  end

  resources :users, only: [:show, :edit, :update]
end
