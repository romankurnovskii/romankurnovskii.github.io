const setLanguage = window.document.currentScript.getAttribute('languageMode');
var userLang = setLanguage || navigator.language || navigator.userLanguage;

const docsDropdownMenuHandler = () => {
    var dropdown = window.document.getElementsByClassName("dropdown-btn");
    var i;
    for (i = 0; i < dropdown.length; i++) {
        const dropdownLink = dropdown[i]
   
        dropdownLink.addEventListener("click", function () {
            this.classList.toggle("active");

            var dropdownContent = this.nextElementSibling;

            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });

        if (dropdownLink.classList.contains("active")) {
            console.log(132312)
            const dropdownContent = dropdownLink.nextElementSibling;
            dropdownContent.style.display = "block";


            dropdownLink.parentElement.style.display = "block";
            dropdownLink.parentElement.parentElement.style.display = "block";

            console.log(dropdownLink.parentElement.parentElement)
        }
    }
}


docsDropdownMenuHandler()

console.log('Language mode:', userLang)