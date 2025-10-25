document.addEventListener("DOMContentLoaded", () => {
  const langButtons = {
    en: document.getElementById("lang-en"),
    ru: document.getElementById("lang-ru"),
  };

  const setLang = (lang) => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  };

  const savedLang = localStorage.getItem("lang") || "en";
  setLang(savedLang);

  langButtons.en.addEventListener("click", () => setLang("en"));
  langButtons.ru.addEventListener("click", () => setLang("ru"));
});