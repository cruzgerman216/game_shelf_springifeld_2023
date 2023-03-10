class BoardGame < ApplicationRecord
    validates :title, presence: true 
end
