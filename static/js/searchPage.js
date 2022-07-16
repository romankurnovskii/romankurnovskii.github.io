const params = new URLSearchParams(window.location.search)
const query = params.get('query')

const idx = lunr(function () {
    // Search these fields
    this.ref('uri')
    this.field('title')
    this.field('tags')
    this.field('content')

    // Add the documents from your search index to
    // provide the data to idx
    for (const key in window.store) {
        this.add({
            uri: key,
            title: window.store[key].title,
            tags: window.store[key].category,
            content: window.store[key].content
        })
    }
})

const results = idx.search(query)
const searchResults = document.getElementById('results')

if (results.length) { // Length greater than 0 is truthy
    let resultList = ''
    for (const n in results) {
        const item = store[results[n].ref]
        resultList += '<li><p><a href="' + item.url + '">' + item.title + '</a></p>'
        // Add a short clip of the content
        resultList += '<p>' + item.content.substring(0, 150) + '...</p></li>'
    }
    searchResults.innerHTML = resultList
} else {
    searchResults.innerHTML = 'No results found.'
}