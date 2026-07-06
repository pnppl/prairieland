function resize-cover --argument-names pic pos
	mogrify -resize 600x927 -background white -gravity "$pos" -extent 600x927 "$pic"
end
