class CreatePokemons < ActiveRecord::Migration[5.0]
  def change
    create_table :pokemons do |t|
      t.string :name, null: false
      t.string :type 
      t.integer :weight, null: false
      t.string :image_url, null: false

    end
  end
end
