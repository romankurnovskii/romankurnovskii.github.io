const languageMode = window.document.currentScript.getAttribute('languageMode');

let searchIndex = {}
let pagesStore = {}

// Need to create ONLY once , maybe before push | during build
const createIndex = (documents, lang) => {
    searchIndex[lang] = lunr(function () {
        this.field("title");
        this.field("content");
        this.field("description");
        this.field("uri");

        this.ref('uri')

        documents.forEach(function (doc) {
            pagesStore[doc['uri']] = doc['title']
            this.add(doc)
        }, this)
    })

}

const loadIndexData = () => {
    const url = "/search.json";

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const pages_content = JSON.parse(this.responseText);

            const ru_pages = pages_content['ru']
            const en_pages = pages_content['en']

            createIndex(ru_pages, 'ru')
            createIndex(en_pages, 'en')

        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

const search = (text, languageMode) => {
    let result = searchIndex[languageMode].search(text)
    return result
}

// TODO refactor
const renderSearchResults = (results) => {
    const searchResultsViewBlock = document.getElementById('search-result')
    searchResultsViewBlock.style.display = 'initial';
    searchResultsViewBlock.removeAttribute('hidden')
    searchResultsViewBlock.setAttribute('aria-hidden', 'false')

    document.addEventListener('mouseup', function (e) {
        console.log(1111, e.target)
        if (!searchResultsViewBlock.contains(e.target)) {
            searchResultsViewBlock.style.display = 'none';
            searchResultsViewBlock.setAttribute('class','hidden')
        }
    });

    const searchResultsDiv = document.getElementById('search-results')
    searchResultsDiv.innerHTML = ''
    const resultsBlock = document.createElement('ul')

    for (let post of results) {
        const url = post['ref']
        const title = pagesStore[url]

        let commentBlock = document.createElement('li')

        let link = document.createElement('a',)
        let linkText = document.createTextNode(title);
        link.appendChild(linkText)
        link.href = url

        commentBlock.appendChild(link)
        resultsBlock.appendChild(commentBlock)
    }

    searchResultsDiv.appendChild(resultsBlock)

}

const getPageLanguage = () => {
    // var languageMode = document.getElementById("languageMode");
    // languageMode = 'English' == languageMode.innerText ? 'en' : 'ru'
    return languageMode
}

const searchFormObserver = () => {
    var form = document.getElementById("search");
    var input = document.getElementById("search-input");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var term = input.value.trim();
        if (!term) {
            return
        }

        const search_results = search(term, getPageLanguage());
        renderSearchResults(search_results)

    }, false);
}


// create indexes
loadIndexData()

searchFormObserver()
