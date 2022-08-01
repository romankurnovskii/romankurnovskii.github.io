const languageMode = window.document.currentScript.getAttribute('languageMode');
const MAX_SEARCH_RESULTS = 10;

let searchIndex = {};
const pagesStore = {};

// Need to create ONLY once , maybe before push | during build
const createIndex = documents => {
	searchIndex = lunr(function () {
		this.field('title');
		this.field('content');
		this.field('description');
		this.field('uri');

		this.ref('uri');

		documents.forEach(function (doc) {
			pagesStore[doc.uri] = doc.title;
			this.add(doc);
		}, this);
	});
};

const loadIndexData = () => {
	const url = `/${languageMode}/search.json`;

	const xmlhttp = new XMLHttpRequest();
	xmlhttp.addEventListener('readystatechange', function () {
		if (this.readyState == 4 && this.status == 200) {
			const pages_content = JSON.parse(this.responseText);
			createIndex(pages_content);
		}
	});

	xmlhttp.open('GET', url, true);
	xmlhttp.send();
};

const search = text => {
	const result = searchIndex.search(text);
	return result;
};

const hideSearchResults = (event, divBlock) => {
	event.preventDefault();
	if (!divBlock.contains(event.target)) {
		divBlock.style.display = 'none';
		divBlock.setAttribute('class', 'hidden');
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

	for (const post of results) {
		const url = post.ref;
		const title = pagesStore[url];

		const commentBlock = document.createElement('li');

		const link = document.createElement('a');
		const linkText = document.createTextNode(title);
		link.append(linkText);
		link.href = url;

		commentBlock.append(link);
		resultsBlock.append(commentBlock);
	}

	searchResultsDiv.append(resultsBlock);
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

		const search_results = search(term, languageMode);
		renderSearchResults(search_results.slice(0, MAX_SEARCH_RESULTS));
	}, false);
};

// Create indexes
loadIndexData();

searchFormObserver();
