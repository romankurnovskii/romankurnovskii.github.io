const setLanguage = window.document.currentScript.getAttribute('languageMode');
const userLang = setLanguage || navigator.language || navigator.userLanguage;

console.log('Language mode:', userLang);
