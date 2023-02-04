const parameters = new URLSearchParams(window.location.search);
const query = parameters.get('query');


let idxData = {}
const loadContentIndex = async () => {
	const response = await fetch('/search/index.json');
	if (response.status !== 200) {
		throw new Error('Server Error');
	}
	const textData = await response.text();
	idxData = JSON.parse(textData);
}

const getPageContentByUri = (uri, lang, contentLength = 150) => {
	let content = ''
	const langData = idxData[lang]

	if (langData) {
		for (const pageData of langData) {
			if (pageData.uri === uri) {
				if (pageData.description) {
					content += pageData.description
					content += '\n'
				}
				content += pageData.content.slice(0, contentLength)
				break
			}
		}
	}
	return content
}

const searchOnPageHandler = async text => {
	const idx = await getIndexData();
	const results = searchResults(idx, text);
	return results
}

if (query) {
	console.log("Search request:", query)
	loadContentIndex().then(() => {
		searchOnPageHandler(query).then((results) => {
			const divSearchResults = document.querySelector('#full_page_search_results');
			if (results.length > 0) { // Length greater than 0 is truthy
				const convertedResults = prepareResultsForRender(results)
				let resultList = ''
				for (const [url, title] of convertedResults) {
					let _url = url
					if (url.endsWith('/_index')) {
						_url = url.slice(0, -6)
					}
					resultList += '<li><p><a href="' + _url + '">' + title + '</a></p>';
					const pageContent = getPageContentByUri(url.slice(3), languageMode)
					// Add a short clip of the content
					resultList += '<p>' + pageContent + '...</p></li>';
				}
				divSearchResults.innerHTML = resultList;
			} else {
				divSearchResults.innerHTML = 'No results found.';
			}
		})
	})
}
