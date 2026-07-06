for file in ../*/index.html ../crimethinc-gender/*.html
	set loc (path dirname "$file")
	set zine (folder "$file")
	if test "$zine" = "gallery" -o "$zine" = "map" -o "$zine" = "destroying-white-nationalism"
		continue
	end
	if test "$file" = "../crimethinc-gender/classic.html"
		set zine "crimethinc-gender-classic"
	end
	if test "$file" = "../crimethinc-gender/remix.html"
		set zine "crimethinc-gender-remix"
	end
	set markdown_no '-smart-raw_html-raw_attribute-link_attributes-header_attributes-fenced_divs-native_divs-native_spans-bracketed_spans-tex_math_dollars-tex_math_single_backslash-tex_math_double_backslash-example_lists-citations-strikeout-superscript-subscript'
	set markdown "markdown+footnotes+hard_line_breaks$markdown_no"
	pandoc -f html-native_spans-native_divs -t "$markdown" --reference-links --reference-location=block --lua-filter=remove-anchors.lua "$file" |
		# remove nbsp
		sed 's,\xC2\xA0,,g' |
		# let lists be lists
		sed -E 's,^([0-9ivx]+)[\]([).]),\1\2,g' |
		# `\[n\]` at start of line -> `[^n]:` (for footnotes)
		sed -E 's,^[\][[]([0-9ivx]+)[\][]],[^\1]:,g' |
		# `\[n\]` -> `[^n]` (for refs to footnotes)
		 sed -E 's,[\][[]([0-9ivx]+)[\][]],[^\1],g' |
		# clean up links enclosed in angle brackets
		sed -E 's,[[][\][<],<,g' |
		sed -E 's,[\][>][]],>,g' |
		sed -E 's,[\][<][[],<,g' |
		sed -E 's,[]][\][>],>,g' |
		sed -E 's,^  [<]([^>]+)[>]: \1$,,g' |
		# unescape the rest of the brackets since it's hard to read otherwise and it seems unlikely to cause issues
		sed -E 's,[\][[],[,g' |
		sed -E 's,[\][]],],g' |
		sed -E 's,[\][<],<,g' |
		sed -E 's,[\][>],>,g' |
		# add another newline above headings, i fucking hate how everyone keeps everything perfectly spaced and indistinguishable
		sed -E 's,^[#],\n#,g' |
		# remove extraneous blank lines |
		sd '^[\n]{3,}' '\n\n' |
		# why the fuck is the hr so big? we are not hard wrapping at 72. cut it in half
		sd -- '------------------------------------------------------------------------' '------------------------------------' |
		# ALL OF MY HATE
		sed -E "s,[\][`],',g" > "$loc/$zine.md"
end
