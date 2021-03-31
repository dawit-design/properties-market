class AddUserIdToProperties < ActiveRecord::Migration[6.1]
  def change
    add_column :properties, :user_id, :string
    add_column :properties, :agent_id, :string
  end
end
