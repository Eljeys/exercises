window.addEventListener("load", start);
// import { computer } from "./modul.js";
const inputEl = document.querySelector("#inpul_field").value;
const startBtn = document.querySelector("#start_btn");
const tooLowBtn = document.querySelector("#too_Low_btn");
const tooHighBtn = document.querySelector("#too_high_btn");
const correctBtn = document.querySelector("#correct_btn");
const choosenNum = document.querySelector("#choosen_number");

let low = 0;
let high = 100;
let compGuess = Math.floor((low + high) / 2);
// let compGuess = computer((0, 100));
const compResult = document.querySelector("#comp_guess");

let numberOfGuess = 0;
// console.log(compChoice(100, 0));

//Load function
function start() {
  document.querySelector("input").disabled = false;
  tooHighBtn.disabled = true;
  tooLowBtn.disabled = true;
  correctBtn.disabled = true;
  startBtn.addEventListener("click", startGame);
}

//click events
function startGame() {
  startBtn.disabled = true;
  document.querySelector("input").disabled = true;
  disabledBtn();
  choosenNum.textContent = ` Your choosen: ${inputEl} as the number`;
  generateChoice();
}

//extra functions
function disabledBtn() {
  tooHighBtn.disabled = false;
  tooLowBtn.disabled = false;
  correctBtn.disabled = false;
}

//computers choice
function generateChoice() {
  console.log("computeren gætter på:", compGuess);
  compGuess = Math.floor((low + high) / 2);
  compResult.innerHTML = `Computer guess is ${compGuess}`;
}

tooHighBtn.addEventListener("click", () => {
  console.log("tohigh");
  high = compGuess - 1;
  console.log("high number is now: ", high);
  generateChoice();
});

tooLowBtn.addEventListener("click", toLow);
function toLow() {
  compResult.innerHTML = "";
  console.log("tolow");
  low = compGuess + 1;
  console.log("low number is now: ", low);
  generateChoice();
}

correctBtn.addEventListener("click", () => {
  console.log("You guessed it!");
  setTimeout(clear(), 10000);
});

function clear() {
  compResult.innerHTML = "";
  choosenNum.textContent = "";
  location.reload();
}


