require 'rails_helper'

RSpec.describe CompromissesController, type: :controller do

  let(:compromisses_array) { create_list(:compromisse, 3) }
  context "index validates" do
    before { get :index }

    it "assigns validates" do
      expect(assigns(:compromisses)).not_to be_nil
    end

    it "expect array with valid values" do
      expect(assigns(:compromisses)).to match_array(compromisses_array)
    end
  end
end
