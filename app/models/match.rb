class Match < ApplicationRecord
  # Include default devise modules. Others available are:
  belongs_to :user
  belongs_to :pokemon
end
