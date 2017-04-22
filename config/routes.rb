Rails.application.routes.draw do
  root "home#index"

  resource :home
  resources :users, only: [:show, :edit, :update]

  namespace :api do
    namespace :v1 do
      resources :matches, only: [:index, :create]
    end
  end

  devise_for :users, except: [:show, :edit, :update]
end
