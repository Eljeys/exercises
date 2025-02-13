"use strict";

const html = document.querySelector("html");

html.addEventListener("mousemove", changeColor);

function changeColor(evt) {
  const saturValue = (`${evt.clientY}` / window.innerHeight) * 100;
  const lightValue = (`${evt.clientX}` / window.innerWidth) * 100;
  html.style.setProperty("--lightness", `${lightValue}`);
  html.style.setProperty("--saturation", `${saturValue}`);
}

//Hvordan fungerer koden?
//1) jeg vælger html element fra index.html og gemmer det i en const kaldt html.
//2) Tilføjer en eventListener til html-element der har en mouseover event, den event trigger en function changeColor.
//3) changeColor() har et parameter evt, som referer til den event der sker når mussen bevæger sig over skærmen.
//4) I selve functionen functionen laver jeg en const "lightValue" som jeg giver værdien mussens x position (fås fra ClientX) divideret browservinduets bredde mellem højre og venstre side af vinduet, og det dividere jeg så med 100 for at gøre værdien til procent. (den procentværdi man får skal forstås som den værdi css propertien --lightness får)
//Det samme gøre sig gældende for værdien til saturation (saturValue);
//5) til sidst kan man give html elementet style proppertien "--lightness", som får værdien fra const lightValue, og en propertien "--saturation" som får værdien fra const saturvalue.
