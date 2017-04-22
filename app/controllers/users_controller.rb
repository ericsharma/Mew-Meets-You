class UsersController < ApplicationController
  def show
    binding.pry
    @user = User.find(params[:id])
    @matches = @user.pokemons
  end

  def destroy
    redirect_to destroy_user_session_path, method: :delete
  end
end
