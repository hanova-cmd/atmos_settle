document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("lang-en");
  const ruBtn = document.getElementById("lang-ru");

  const lang = localStorage.getItem("lang") || "en";
  setLanguage(lang);

  enBtn.addEventListener("click", () => setLanguage("en"));
  ruBtn.addEventListener("click", () => setLanguage("ru"));

  function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    const texts = document.querySelectorAll("[data-en]");
    texts.forEach((el) => {
      el.innerText = el.getAttribute(`data-${lang}`);
    });
  }
});