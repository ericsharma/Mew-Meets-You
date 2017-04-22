Rails.application.routes.draw do
  devise_for :users
  get 'users/:id' => 'users#show', as: :user

  root "home#index"

  resource :home
  resources :users, only: [:show]

  namespace :api do
    namespace :v1 do
      resources :matches, only: [:index, :create]
    end
  end

end
