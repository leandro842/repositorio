require 'rails_helper'

RSpec.describe CompromissesController, type: :controller do
  context "index" do
    before { get :index }
    it "show all reminders" do
      expect(assigns(:compromisses)).not_to be_nil
    end
    it "should be a valid query" do
      compromisses_array = create_list(:compromisse, 3)
      expect(assigns(:compromisses)).to match_array(compromisses_array)
    end
  end
end
