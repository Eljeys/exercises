window.addEventListener("load", start);
import { compChoice } from "./modul.js";
const inputEl = document.querySelector("#input_field");
const startBtn = document.querySelector("#start_btn");
const tooLowBtn = document.querySelector("#too_Low_btn");
const tooHighBtn = document.querySelector("#too_high_btn");
const correctBtn = document.querySelector("#correct_btn");
const choosenNum = document.querySelector("#choosen_number");

let numberOfGuess = 0;
console.log(compChoice(100, 0));

//Load function
function start() {
  tooHighBtn.disabled = true;
  tooLowBtn.disabled = true;
  correctBtn.disabled = true;
  startBtn.addEventListener("click", startGame);
}

//click events
function startGame() {
  startBtn.disabled = true;
  disabledBtn();
}

//extra functions
function disabledBtn() {
  console.log("disabled()");
  tooHighBtn.disabled = false;
  tooLowBtn.disabled = false;
  correctBtn.disabled = false;
}

// console.log(disabledBtn());
