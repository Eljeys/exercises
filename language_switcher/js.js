"use strict";
// window.addEventListener("DOMContentLoaded", ChooseLan);
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
let locale = "da";
let locale2 = "de";

const dropdown = document.querySelector("#choose_language");

dropdown.addEventListener("change", ChooseLan);

function ChooseLan() {
  if (dropdown.value === "Da") {
    texts[locale].texts.forEach((item) => {
      const element = document.querySelector(item.location);
      if (element) {
        element.textContent = item.text;
      }
    });
  } else {
    texts[locale2].texts.forEach((item) => {
      const element = document.querySelector(item.location);
      if (element) {
        element.textContent = item.text;
      }
    });
  }
}
