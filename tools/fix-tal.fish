function fix-tal --argument-names html source
	sed -i 's/  /\t/g' "$html"
	sd -n 1 -- '</title>' '</title>\n\t<link href="'"$source"'" rel="canonical cite-as original">\n\t<meta name="color-scheme" content="light dark">\n\t<meta name="viewport" content="width=device-width, initial-scale=1">\n\t<style><!--\n\t\t* {\n\t\t\tcolor: initial !important;\n\t\t}\n\t\tbody {\n\t\tmargin: 0 auto !important;\n\n\t\t\tmax-width: 80ch !important;\n\t\t\tpadding: 0 0.75em !important;\n\t\t}\n\t\tdiv#page {\n\t\t\tmargin: 0 !important;\n\t\t\tpadding: 0 !important;\n\t\t}\n\t\t@media screen and (prefers-color-scheme: dark) {\n\t\t\tbody {\n\t\t\t\tbackground: black !important;\n\t\t\t}\n\t\t}\n\t--></style>\n' "$html"
	klean "$html" > index.html
end
