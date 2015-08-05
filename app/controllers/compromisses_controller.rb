class CompromissesController < ApplicationController

  def index
    @compromisses = Compromisse.all
  end
end
