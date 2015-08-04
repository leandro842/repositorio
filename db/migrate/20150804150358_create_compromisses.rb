class CreateCompromisses < ActiveRecord::Migration
  def change
    create_table :compromisses do |t|
      t.string :title
      t.text :description
      t.datetime :creation_date
      t.date :event_date

      t.timestamps null: false
    end
  end
end
