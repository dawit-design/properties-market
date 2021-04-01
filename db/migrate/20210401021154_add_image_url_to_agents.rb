class AddImageUrlToAgents < ActiveRecord::Migration[6.1]
  def change
    add_column :agents, :image_url, :string
  end
end
