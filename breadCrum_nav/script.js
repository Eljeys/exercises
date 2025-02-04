const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];
const link = document.querySelector("ul");

document.querySelector("button").addEventListener("click", createPath);

function createPath() {
  bc.forEach((vare) => {
    if(bc[bc.length-1].name===vare.name){
      link.innerHTML += `<li>${vare.name }<li>`
    }else{
        link.innerHTML += `<li><a href="${vare.link}">${vare.name}</a> /&nbsp</li>`;
    }
  });
}

//console.log(Arrayet sidste element)
console.log(bc[bc.length - 1]);





//1) definere vores ul til en variabel link
// const link = document.querySelector("ul");

//2) laver en eventListener på <button>
// document.querySelector("button").addEventListener("click", createPath);

//3) kører en function creatPatch()

//4) Et forEach(()) med parameter vare = en reference til elementer i arrayet bc. 

//5 en betingelse for generering laves. her spørger den på om det sidste element i arrayet bc name. hvis det er tilføjes det som et list item til ul i HTML'en.

//6 bliver if betingelsen ikke opfyldt, skal den gøre element arrayet er nået til, til en url. med / til sidst. 

// function createPath() {
//   bc.forEach((vare) => {
//     if(bc[bc.length-1].name===vare.name){
//       link.innerHTML += `<li>${vare.name }<li>`
//     }else{
//         link.innerHTML += `<li><a href="${vare.link}">${vare.name}</a> /&nbsp</li>`;
//     }
//   });
// }