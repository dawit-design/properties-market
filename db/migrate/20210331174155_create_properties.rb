class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :city
      t.string :state
      t.string :street_adress
      t.string :image_url
      t.string :type
      t.integer :year_bulit_in
      t.integer :price
      t.string :description

      t.timestamps
    end
  end
end
