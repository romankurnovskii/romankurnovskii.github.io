const openCommentsServer = window.document.currentScript.getAttribute('server');
const renderDivId = window.document.currentScript.getAttribute('renderDivId');

function getDatePrintFormat(date) {
    return new Date(date).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
    });
}

const renderComments = (comments) => {
    let commentsDiv = document.getElementById('opencomments__list');
    commentsDiv.innerHTML = '' // TODO, not good

    for (let comment of comments) {
        let commentBlock = document.createElement('li')

        commentBlock.innerHTML = `
<div class="comment__block ">
        <span class="comment_author">${comment.author}</span>
        <span class="comment_text">${comment.comment}</span>
</div>
<div class="comment_date__div">
    <span class="comment_date">${getDatePrintFormat(comment.date)}</span>
</div>
        `
        // add comment to comments list
        commentsDiv.appendChild(commentBlock)
    }
}

const setPageViews = (views) => {
    const pageViewsBlock = document.getElementById('page__views')
    pageViewsBlock.innerText += views
}

const e = React.createElement;

function OpenCommentsRender() {
    const url = window.location.href

    const handleSendComment = () => {
        let comment = document.getElementById('comment').value
        let author = document.getElementById('form__comment_author').value

        const requestUrl = `${openCommentsServer}?page=${url}`

        axios.post(requestUrl, {
            author,
            comment
        })
            .then(e => document.getElementById('comment').value = "")
            .then(loadPageComments)
    }

    const loadPageComments = () => {
        const requestUrl = `${openCommentsServer}?page=${url}`
        axios.get(requestUrl).then(response => {
            renderComments(response.data['comments'])
            setPageViews(response.data['page_views'])
        })
    }

    React.useEffect(() => {
        loadPageComments()
    }, [])

    let buttonSend = document.getElementById('comment-send')
    buttonSend.addEventListener('click', handleSendComment)

    return e(
        'div',
        null,
    )

}


ReactDOM.render(React.createElement(OpenCommentsRender), document.getElementById(renderDivId));

