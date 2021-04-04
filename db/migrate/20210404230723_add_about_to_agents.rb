class AddAboutToAgents < ActiveRecord::Migration[6.1]
  def change
    add_column :agents, :about, :string
  end
end
