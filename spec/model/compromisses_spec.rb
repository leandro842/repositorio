require 'rails_helper' #Carrega o arquivo de configuração do rspec

# RSpec é a classe do rspec, describe é o método que recebe a classe que será
# testada, type indica o tipo da classe e model é a descrição, 
# em seguida passa-se o bloco.
RSpec.describe Compromisse, type: :model do

  # let recebe o bloco com o método.
  # create e o nome da factory, devolve numa variável.
  let(:compromisse) { create(:compromisse) }

	# escopo do teste.
  context "compromisse" do

    # contexto do teste.
    it "need to be present" do

      # verifica se o objeto instanciado com os atributos da factory é válido.
      expect(compromisse).to be_valid
    end

    # contexto do teste.
    it "title must be invalid" do

      # recebe na variável invalid_compromisse os atributos da factory + trait.
      invalid_compromisse = build(:compromisse, :invalid_compromisse)

      # verifica se o objeto instanciado com os atributos da factory é inválido.
      expect(invalid_compromisse).to be_invalid
    end

    # contexto do teste.
    it "creation_date must be invalid" do

      # recebe na variável invalid_creation_date os atributos factory + trait.
      invalid_creation_date = build(:compromisse, :invalid_creation_date)

      # verifica se o objeto instanciado com os atributos é inválido.
      expect(invalid_creation_date).to be_invalid
    end
  end
end
