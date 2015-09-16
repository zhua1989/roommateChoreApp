class Roommate < ActiveRecord::Base
  has_secure_password


  belongs_to :apartment
  has_many :chores

  validates_uniqueness_of :email
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates_format_of :email, :with => /@/



end
    