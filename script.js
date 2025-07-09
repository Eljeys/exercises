let darkmode = localStorage.getItem("darkmode");
const themeSwicth = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmod = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkmode", null);
};

/*save the theme when website is loaded*/
if (darkmode === "active") enableDarkmode();

themeSwicth.addEventListener("click", () => {
  console.log("mode active");
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmod();
});
