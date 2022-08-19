all: push

push:
	echo "--------Started git pull -> update modules -> merge -> push--------"
	npm run p

pushnb:
	echo "----- Push no build -----"
	git add .
	git commit -m "nobuild"
	git push
	
upd:
	echo "--------Started merge from main branch--------"
	git merge main