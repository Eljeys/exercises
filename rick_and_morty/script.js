fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((character) => {
      let charactersContainer = document.getElementById("characters-container");
      data.results.forEach((character) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
  <img src="${character.image}" alt="${character.name}" class="character-image">
  <p class="character-detail"><span class="attribute">Name:</span> ${character.name}</p>
  <p class="character-detail"><span class="attribute">Status:</span> ${character.status}</p>
  <p class="character-detail"><span class="attribute">Species:</span> ${character.species}</p>
`;

        charactersContainer.appendChild(card);
      });
    });
  });

let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("myToggle");

const enableDarkmode = () => {
  console.log("darkmode is active");
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  console.log("lightmode is active");
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkmode", "null");
};
//enable darkmode from first time
if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("change", () => {
  console.log("active");
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
