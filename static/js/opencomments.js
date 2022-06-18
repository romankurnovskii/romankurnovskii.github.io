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
        var author = document.createTextNode(comment.author);
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


const e = React.createElement;

function Example() {
    const [count, setCount] = React.useState(0);
    const url = window.location.href


    const handleSendComment = () => {
        let comment = document.getElementById('comment').value
        let author = document.getElementById('form__comment_author').value

        const requestUrl = `${openCommentsServer}?page=${url}`

        axios.post(requestUrl, {
            author,
            comment
        }).then(loadPageComments)
    }

    const loadPageComments = () => {
        const requestUrl = `${openCommentsServer}?page=${url}`
        axios.get(requestUrl).then(response => {
            console.log(response.data)
            renderComments(response.data['comments'])
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

