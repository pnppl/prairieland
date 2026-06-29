function make-cover
	set name (path basename (pwd))
	caesium --quality 80 --width 600 --format jpeg -o o (pdftoppm -singlefile -png -progress $name.pdf | psub) && mv o/.psub.jpg $name.jpg && trash o/
end
