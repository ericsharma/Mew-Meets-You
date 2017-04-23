class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @matches = @user.pokemons
  end

  def edit
  end

  def update
  end

end
