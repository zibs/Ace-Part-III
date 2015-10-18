class PoemController < ApplicationController
  def index
		# RANDOMIZE WORD SELECTION
	if (rand(1..10) >= 8)
	 	@new_word = Word.order("RANDOM()").first.word
	  else
		@new_word = FunctionWord.order("RANDOM()").first.word
	end
	# ADD NEW WORD TO THE LONG POEM
	@newpoem = Poem.last.poetry.split(" ").unshift("#{@new_word}").join(" ")
	Poem.last.update_attributes(poetry: "#{@newpoem}")
	# INSTANTIATE LONG POEM
	@the_LongPoem = Poem.last.poetry.split(" ")
	# PULL OUT FIRST AND FINAL LINES FOR DISPLAY
	@first_left = @the_LongPoem.slice!(0,4)
	@first_right= @the_LongPoem.slice!(0,4)
	@last_right = @the_LongPoem.slice!(-4, 4)
	@last_left  = @the_LongPoem.slice!(-4, 4)
	# ACE RETURNS
	@Ace        = @the_LongPoem.shuffle.each_slice(4).to_a
	flash[:success] = "you've contributed the word: <b><em>#{@new_word}</em></b> ... how poetic ...".html_safe
	
  end
  # POEMS
  def luelttettsers         
  end

  def rilkittler
  end

  def selfportrait
  end

  def hotnetworkquestions
  end

  def birds
  end

  def bread
  end

  def spuilyie
  end

  def sunmoon
  end

  def yoloy 
  end
  
  def createpassword
  end

  def casestudyb
  end

  def aeiou
  end
  

  # ESSAYS

  def robopoetics
  end

  def checkthenumbersafter
  end


  
end
