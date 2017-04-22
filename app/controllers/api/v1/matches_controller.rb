class Api::V1::MatchesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    pokemon = Pokemon.create!(
      name: params[:name],
      weight: params[:weight],
      image_url: params[:image_url]
    )
    match = Match.new(pokemon: pokemon, user: current_user)

    if match.save
      render json: match
    else
      render_object_errors(match)
    end
  end

  def render_object_errors(object)
    render json: { errors: object.errors.full_messages }, status: :unprocessable_entity
  end

  private

end
