// Show placeholders for paragraphs
const paragraphs = Array.prototype.slice.call(document.querySelectorAll('p.placeholder'));

for (const paragraph of paragraphs) {
	paragraph.innerHTML = paragraph.textContent
		.split(' ')
		.filter(text => text.length > 4)
		.map(text => `<span class="placeholder__word">${text}</span>`)
		.join(' ');
}
