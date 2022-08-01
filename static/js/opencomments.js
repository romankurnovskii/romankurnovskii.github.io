const openCommentsServer = window.document.currentScript.getAttribute('server');
const renderDivId = window.document.currentScript.getAttribute('renderDivId');

const setPageViews = views => {
	const pageViewsDiv = document.querySelector('#page__views__div');
	const pageViewsBlock = document.querySelector('#page__views');
	pageViewsBlock.innerText += views;
	pageViewsDiv.style.display = 'initial';
};

function getDatePrintFormat(date) {
	return new Date(date).toLocaleDateString('ru-RU', {
		year: 'numeric',
		month: '2-digit',
		day: 'numeric',
	});
}

const renderComments = comments => {
	const commentsDiv = document.querySelector('#opencomments__list');
	commentsDiv.innerHTML = ''; // TODO, not good

	for (const comment of comments) {
		const commentBlock = document.createElement('li');

		commentBlock.innerHTML = `
<div class="comment__block ">
        <span class="comment_author">${comment.author}</span>
        <span class="comment_text">${comment.comment}</span>
</div>
<div class="comment_date__div">
    <span class="comment_date">${getDatePrintFormat(comment.date)}</span>
</div>
        `;
		// Add comment to comments list
		commentsDiv.append(commentBlock);
	}
};

const renderElement = React.createElement;

function OpenCommentsRender() {
	const url = window.location.href;

	const handleSendComment = () => {
		const comment = document.querySelector('#comment').value;
		const author = document.querySelector('#form__comment_author').value;

		const requestUrl = `${openCommentsServer}?page=${url}`;

		axios.post(requestUrl, {
			author,
			comment,
		})
			.then(e => document.querySelector('#comment').value = '')
			.then(loadPageComments);
	};

	const loadPageComments = () => {
		const requestUrl = `${openCommentsServer}?page=${url}`;
		axios.get(requestUrl).then(response => {
			renderComments(response.data.comments);
			setPageViews(response.data.page_views);
		});
	};

	React.useEffect(() => {
		loadPageComments();
	}, []);

	const buttonSend = document.querySelector('#comment-send');
	buttonSend.addEventListener('click', handleSendComment);

	return renderElement(
		'div',
		null,
	);
}

ReactDOM.render(React.createElement(OpenCommentsRender), document.getElementById(renderDivId));

