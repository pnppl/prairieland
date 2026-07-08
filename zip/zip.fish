set pwd (pwd)
set dir ~/prairieland/zip
cd "$dir"

for zine in (find .. -name '*.pdf' | grep -vE 'print|new/')
	zip -9 -j prairieland-zines_screen-pdf.zip "$zine"
end
for zine in (find .. -name '*.pdf' | grep -v 'new/' | grep 'print')
	zip -9 -j prairieland-zines_print-pdf.zip "$zine"
end
for zine in (find .. -name '*.md' | grep -vE 'README|notes')
	zip -9 -j prairieland-zines_text-md.zip "$zine"
end

curl https://pnppl.cc/prairieland/ |
sed 's|//zines.pnppl.cc/||g' |
sd '</head>' '<style> body { max-width: 80ch; margin: auto; } </style></head>' |
sd -n 1 -f s '<div.+?/div>' '' |
sd -n 1 -f s '<h2 id="Backlinks".+</body>' '</div></div></div></body>' |
sd '<ul>\n<li>.+\n</ul>' '' > index.html

cd "$dir/.."
for zine in (ls -1d --color=never */ | grep -vE 'new/|sources/|tools/|font/|zip/')
	zip -r -9 "$dir"/prairieland-zines_html.zip "$zine" --exclude '*.pdf' '*.md'
end
cd "$dir"
zip -9 prairieland-zines_html.zip index.html
rm index.html
cd "$pwd"
