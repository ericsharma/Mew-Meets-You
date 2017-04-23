Rails.application.routes.draw do
  root "home#index"
  devise_for :users do
    get '/users/sign_out' => 'devise/sessions#new'
    get '/users/sign_in' => 'devise/sessions#destroy'
    post '/users/sign_in' => 'devise/sessions#create'
  end

  resource :home
  resources :users, only: [:show, :edit, :update]

  namespace :api do
    namespace :v1 do
      resources :matches, only: [:index, :create]
    end
  end

end
