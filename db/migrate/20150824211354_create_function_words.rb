class CreateFunctionWords < ActiveRecord::Migration
  def change
    create_table :function_words do |t|
      t.text :word

      t.timestamps null: false
    end
  end
end
