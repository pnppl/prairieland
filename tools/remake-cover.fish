function remake-cover --argument-names pdf pos
	set tmp tmp.png
	set name (path basename -E "$pdf") &&
	pdftoppm -singlefile -png -progress "$name.pdf" > "$tmp" &&
	mogrify -resize 600x927 -background white -gravity "$pos" -extent 600x927 "$tmp" &&
	caesium --quality 80 --width 600 --format jpeg -o o "$tmp" &&
	mv o/tmp.jpg "$name.jpg" &&
	trash o/ &&
	trash tmp.png ||
	echo "something fucked up"
end
