FactoryGirl.define  do
  factory :compromisse do
    title "teste"
    description "teste_description"
    creation_date DateTime.now
    
    trait :invalid_compromisse do
      title nil
    end
    trait :invalid_creation_date do
      creation_date nil
    end
  end
end
