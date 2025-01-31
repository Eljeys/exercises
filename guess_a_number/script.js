"use strict";
const ranNum = Math.floor(Math.random() * 101);
let myGuess = 0;
document.querySelector("#sub_btn").addEventListener("click", guessNumber);
console.log(ranNum);
//Nedestående kode er snuppet fra w3School og er et forsøg på at implementere at man kan bruge Enter til at submit sit svar!
document
  .querySelector("#input_filed")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector("#sub_btn").click();
    }
  });

function guessNumber() {
  myGuess++;
  const inputField = document.querySelector("#input_filed").value;
  if (ranNum > inputField) {
    return showAlert();
  } else if (ranNum < inputField) {
    return showAlert();
  } else {
    return showAlert("limegreen");
  }
}

//The modal popUp window logic
function showAlert(color = "whitesmoke") {
  document.querySelector("#custome_alert").style.display = "flex";
  document.querySelector("#custome_alert").style.backgroundColor = color;
  let article = document.querySelector("article");
  const inputField = document.querySelector("#input_filed").value;
  if (ranNum > inputField) {
    article.innerHTML = `Nice try! ${inputField} Is to low. Try again!`;
  } else if (ranNum < inputField) {
    article.innerHTML = `Nice try! ${inputField} Is to high. Try again!`;
  } else {
    article.innerHTML = `${inputField} Is to correct. You used ${myGuess} guess. <br> Feel free to try a new round!`;
  }
}

function closeAlert() {
  document.querySelector("#custome_alert").style.display = "none";
}

// implementeres på sigt!
// function rest() {
//   console.log("New number generate");
//   location.reload();
// }
