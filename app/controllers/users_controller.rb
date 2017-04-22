class UsersController < ApplicationController
  def show
    binding.pry
    @user = User.find(params[:id])
    @matches = @user.pokemons
  end

  def show
  end

  def edit
  end


end
