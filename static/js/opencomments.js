const openCommentsServer = window.document.currentScript.getAttribute('server');

const renderComments = (comments) => {
    var commentsDiv = document.getElementById('opencomments');
    commentsDiv.innerHTML = '' // TODO, not good

    let commentUlElement = document.createElement('ul')

    for (let comment of comments) {
        let commentBlock = document.createElement('li')
        let authorBlock = document.createElement("div");
        let textBlock = document.createElement("div");


        // set class names
        commentBlock.classList.add('flex')
        authorBlock.classList.add("author")
        textBlock.classList.add('comment-text')


        // set data
        var author = document.createTextNode(comment.author + ": ");
        var text = document.createTextNode(comment.comment);


        // insert to block
        authorBlock.appendChild(author);
        textBlock.appendChild(text);

        // combine comment
        commentBlock.appendChild(authorBlock);
        commentBlock.appendChild(textBlock);

        commentUlElement.appendChild(commentBlock)

        // add comment to comments list
        commentsDiv.appendChild(commentUlElement)

    }
}


function getDatePrintFormat(date) {
    return new Date(date).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
    });
}

const renderCommentsV2 = (comments) => {
    let commentsDiv = document.getElementById('opencomments__v2__list');
    commentsDiv.innerHTML = '' // TODO, not good

    // let commentUlElement = document.createElement('ul')

    for (let comment of comments) {
        let commentBlock = document.createElement('li')


        commentBlock.innerHTML = `
<div class="flex ml-2">
    <div class="flex flex-col ml-2">
        <span class="author">${comment.author}</span>
        <span class="comment-text">${comment.comment}</span>
    </div>
</div>
<div class="flex flex-col items-center">
    <span class="text-sm text-gray-300">${getDatePrintFormat(comment.date)}</span>
</div>
        `


        // let authorBlock = document.createElement("div");
        // let textBlock = document.createElement("div");


        // // set class names
        // commentBlock.classList.add('flex')
        // authorBlock.classList.add("author")
        // textBlock.classList.add('comment-text')


        // // set data
        // var author = document.createTextNode(comment.author + ": ");
        // var text = document.createTextNode(comment.comment);


        // // insert to block
        // authorBlock.appendChild(author);
        // textBlock.appendChild(text);

        // // combine comment
        // commentBlock.appendChild(authorBlock);
        // commentBlock.appendChild(textBlock);

        // commentUlElement.appendChild(commentBlock)

        // add comment to comments list
        commentsDiv.appendChild(commentBlock)

    }
}


const e = React.createElement;

function Example() {
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
            // renderComments(response.data['comments'])
            renderCommentsV2(response.data['comments'])
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



ReactDOM.render(React.createElement(Example), document.getElementById("react-block"));

