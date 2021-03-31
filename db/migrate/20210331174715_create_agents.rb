class CreateAgents < ActiveRecord::Migration[6.1]
  def change
    create_table :agents do |t|
      t.string :name
      t.string :email
      t.string :office_location
      t.string :speciality

      t.timestamps
    end
  end
end
