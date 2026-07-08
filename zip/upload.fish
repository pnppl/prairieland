git stash &&
for zip in *.zip
	mv "$zip" ..
end
git add .. &&
git commit -m 'deploy zips' &&
git push &&
git reset HEAD~1 &&
git restore . ||
echo "fuck"
