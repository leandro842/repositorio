class Compromisse < ActiveRecord::Base
  validates :title, presence: true
  validates :creation_date, presence: true
end
