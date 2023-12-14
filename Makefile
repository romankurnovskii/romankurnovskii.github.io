all: push

push:
	echo "--------"
	echo "Started git pull -> update modules -> merge -> push"
	echo "--------"
	python3 gen_leetcode_problems_dict.py
	npm run hugo-lunr-ml
	npm run p

pushnb:
	echo "----- Push no build -----"
	git add .
	git commit -m "nobuild"
	git push
	
upd:
	echo "--------Started merge from main branch--------"
	git merge main