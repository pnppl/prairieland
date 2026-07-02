function add-pdf-links --argument-names file
	set name (folder $file)
	sd -n 1 '<body([^>]+)?>' '<body$1>\n<p style="margin-left:auto; width:fit-content; padding-right:1ch">PDF: <a href="'$name.pdf'">screen</a> &#183; <a href="'$name'_print-letter.pdf">print</a></p>' $file
end
