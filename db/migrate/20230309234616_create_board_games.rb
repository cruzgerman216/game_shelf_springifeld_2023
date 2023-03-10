class CreateBoardGames < ActiveRecord::Migration[7.0]
  def change
    create_table :board_games do |t|
      t.integer :num_players
      t.string :title
      t.string :description
      t.string :genre

      t.timestamps
    end
  end
end
