//Main JS file

//Initialize translations
let translations;
const translationFile = './translations.json';
// Fetch translations from JSON file
fetch(translationFile)
  .then(response => response.json())
    .then(data => {
        translations = data;
        console.log("Translations loaded:", translations);
        changeLanguage('en'); // Set default language
    })
    .catch(error => {
        console.error("Error loading translations:", error);
    }
    );

  
  
  console.log("Translations JSON:", translations);
  
  function changeLanguage(language) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
      const key = element.dataset.i18n;
      element.textContent = translations[language][key];
    });
    console.log(`Language changed to: ${language}`);
  }
  
  const languageSwitcher = document.getElementById("langSelector");
  languageSwitcher.addEventListener("change", (event) => {
    changeLanguage(event.target.value);
  });