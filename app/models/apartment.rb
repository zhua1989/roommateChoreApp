class Apartment < ActiveRecord::Base
    has_many :roommates
    has_many :chores, through: :roommates
end
