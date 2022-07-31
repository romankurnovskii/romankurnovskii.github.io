const setLanguage = window.document.currentScript.getAttribute('languageMode');

var userLang = setLanguage || navigator.language || navigator.userLanguage;
console.log('Language mode:', userLang)