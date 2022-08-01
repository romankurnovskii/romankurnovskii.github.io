const languageMode = window.document.currentScript.getAttribute('languageMode');
const MAX_SEARCH_RESULTS = 10;

let searchIndex = {};
let pagesStore = {};

const searchDEPR = text => {
	const result = searchIndex.search(text);
	return result;
};

const hideSearchResults = (event, divBlock) => {
	event.preventDefault();
	if (!divBlock.contains(event.target)) {
		divBlock.style.display = 'none';
		divBlock.setAttribute('type', 'hidden')
	}
};

// TODO refactor
const renderSearchResults = results => {
	const searchResultsViewBlock = document.querySelector('#search-result');

	// Hide on move mouse from results block
	document.addEventListener('mouseup', e => hideSearchResults(e, searchResultsViewBlock));

	const searchResultsDiv = document.querySelector('#search-results');
	searchResultsDiv.innerHTML = '';

	searchResultsViewBlock.style.display = 'initial';
	searchResultsViewBlock.removeAttribute('hidden');

	const resultsBlock = document.createElement('ul');

	for (const [uri, title] of results) {

		const commentBlock = document.createElement('li');

		const link = document.createElement('a');
		const linkText = document.createTextNode(title);
		link.append(linkText);
		link.href = uri;

		commentBlock.append(link);
		resultsBlock.append(commentBlock);
	}

	searchResultsDiv.append(resultsBlock);
};


const getIndexData = async () => {
	let response = await fetch(`/search/lunr-index.json?v2`)
	if (response.status != 200) {
		throw new Error("Server Error");
	}
	// read response stream as text
	let text_data = await response.text();
	const idxData = JSON.parse(text_data)
	const lngIdx = idxData[languageMode]
	const idx = lunr.Index.load(lngIdx)
	pagesStore = idxData['contentMap'][languageMode]
	return idx
}

const searchResults = (idx, text) => {
	return idx.search(text);
}

const prepareResultsForRender = (results) => {
	const renderResults = []
	for (const res of results) {
		let uri = '/' + languageMode + res.ref
		let title = pagesStore[res.ref]
		renderResults.push([uri, title])
	}
	return renderResults
}

const searchHandler = async (text) => {
	const idx = await getIndexData()
	const results = searchResults(idx, text)
	const resultsToRender = prepareResultsForRender(results)
	renderSearchResults(resultsToRender.slice(0, MAX_SEARCH_RESULTS));
}

const searchFormObserver = () => {
	const form = document.querySelector('#search');
	const input = document.querySelector('#search-input');

	form.addEventListener('submit', event => {
		event.preventDefault();
		const term = input.value.trim();
		if (!term) {
			return;
		}
		searchHandler(term)
	}, false);
};

// Create indexes
// loadIndexData();

searchFormObserver();
