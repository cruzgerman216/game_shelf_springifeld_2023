class BoardGamesController < ApplicationController
    def create 
         board_game = BoardGame.new(title: params[:title], num_players: params[:num_players], genre: params[:genre], description: params[:description])

         if board_game.save 
            render json: board_game, status: :created 
         else 
            render json: {errors: board_game.errors.full_messages}, status: :unprocessable_entity
         end
    end

    def index 
        render json: BoardGame.all
    end
end
