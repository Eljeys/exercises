"use strict";
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
const locale = "da";
const locale2= "de";


const dropdown = document.querySelector("#choose_language");

dropdown.addEventListener("click", ChooseLan);

function ChooseLan(){
  if(dropdown.value==="Da"){
    texts[locale].texts.forEach(item=>{
      const element = document.querySelector(item.location);
      if(element){
        element.textContent = item.text;
      }
    })
  }
  else{
    texts[locale2].texts.forEach(item=>{
      const element = document.querySelector(item.location);
      if(element){
        element.textContent = item.text;
      }
    })
  }
}









