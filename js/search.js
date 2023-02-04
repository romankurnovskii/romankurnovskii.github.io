const languageMode = window.document.currentScript.getAttribute('languageMode');
const MAX_SEARCH_RESULTS = 10;
const is_hugo_lunr_generator = true

const searchIndex = {};
let pagesStore = {};


const hideSearchResults = (event, divBlock) => {
	event.preventDefault();
	if (!divBlock.contains(event.target)) {
		divBlock.style.display = 'none';
		divBlock.setAttribute('type', 'hidden');
	}
};

// TODO refactor
const renderSearchResults = results => {
	const searchResultsViewBlock = document.querySelector('#search-result');

	// Hide on move mouse from results block
	document.addEventListener('mouseup', e => hideSearchResults(e, searchResultsViewBlock));

	const searchResultsDiv = document.querySelector('#popup_search_results');
	searchResultsDiv.innerHTML = '';

	searchResultsViewBlock.style.display = 'initial';
	searchResultsViewBlock.removeAttribute('hidden');

	const resultsBlock = document.createElement('ul');

	for (const [uri, title] of results) {
		const commentBlock = document.createElement('li');

		const link = document.createElement('a');
		const linkText = document.createTextNode(title);
		link.append(linkText);
		link.href = uri.endsWith('/_index') ?  uri.slice(0, -6) : uri

		commentBlock.append(link);
		resultsBlock.append(commentBlock);
	}

	searchResultsDiv.append(resultsBlock);
};

const prepareResultsForRender = results => {
	const renderResults = [];
	for (const res of results) {
		let uri = '/' + languageMode + res.ref;
		const title = pagesStore[res.ref];
		renderResults.push([uri, title]);
	}
	return renderResults;
};

const getIndexData = async () => {
	let lunrIndexUrl = '/' + languageMode + '/searchindex.json?v2'
	if (is_hugo_lunr_generator) {
		lunrIndexUrl = '/search/lunr-index.json'
	}

	const response = await fetch(lunrIndexUrl);
	if (response.status !== 200) {
		throw new Error('Server Error');
	}

	// Read response stream as text
	const textData = await response.text();
	const idxData = JSON.parse(textData);

	let idx
	if (is_hugo_lunr_generator) {
		const lngIdx = idxData[languageMode]
		idx = lunr.Index.load(lngIdx)
		pagesStore = idxData['contentMap'][languageMode]
	} else {
		idx = lunr(function () {
			this.ref('uri')
			this.field('title', {
				boost: 5
			});
			this.field('content', {
				boost: 1
			});

			idxData.forEach(function (doc) {
				this.add(doc)
				pagesStore[doc.uri] = doc.title
			}, this)
		})
	}
	return idx;
};

const searchResults = (idx, text) => idx.search(text);

const searchHandler = async text => {
	const idx = await getIndexData();
	const results = searchResults(idx, text);
	const resultsToRender = prepareResultsForRender(results);
	renderSearchResults(resultsToRender.slice(0, MAX_SEARCH_RESULTS));
};

const searchFormObserver = () => {
	const form = document.querySelector('#search');
	const input = document.querySelector('#search-input');

	form.addEventListener('submit', event => {
		event.preventDefault();
		const term = input.value.trim();
		if (!term) {
			return;
		}
		searchHandler(term);
	}, false);
};

searchFormObserver();
