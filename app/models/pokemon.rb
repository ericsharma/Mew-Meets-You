class Pokemon < ApplicationRecord
  # Include default devise modules. Others available are:
  has_many :matches
  
  has_many :users, through: :matches
end
