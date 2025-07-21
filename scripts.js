// CodeSphere V2 - scripts.js
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  // Show default tab (first)
  if (contents.length > 0) {
    contents[0].style.display = "block";
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const lang = tab.getAttribute("data-lang");

      contents.forEach((content) => {
        content.style.display = "none";
      });

      const active = document.getElementById(lang);
      if (active) {
        active.style.display = "block";
      }
    });
  });
});
