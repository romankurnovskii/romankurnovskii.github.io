const setLanguage = window.document.currentScript.getAttribute('languageMode');
const userLang = setLanguage || navigator.language || navigator.userLanguage;

const docsDropdownMenuHandler = () => {
	const dropdown = window.document.querySelectorAll('.dropdown-btn');
	let i;
	for (i = 0; i < dropdown.length; i++) {
		const dropdownLink = dropdown[i];

		dropdownLink.addEventListener('click', function () {
			this.classList.toggle('active');

			const dropdownContent = this.nextElementSibling;

			dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
		});

		if (dropdownLink.classList.contains('active')) {
			console.log(132_312);
			const dropdownContent = dropdownLink.nextElementSibling;
			dropdownContent.style.display = 'block';

			dropdownLink.parentElement.style.display = 'block';
			dropdownLink.parentElement.parentElement.style.display = 'block';

			console.log(dropdownLink.parentElement.parentElement);
		}
	}
};

docsDropdownMenuHandler();

console.log('Language mode:', userLang);
