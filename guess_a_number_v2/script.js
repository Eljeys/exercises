window.addEventListener("load", start);
import { compChoice } from "./modul.js";
const inputEl = document.querySelector("#inpul_field").value;
const startBtn = document.querySelector("#start_btn");
const tooLowBtn = document.querySelector("#too_Low_btn");
const tooHighBtn = document.querySelector("#too_high_btn");
const correctBtn = document.querySelector("#correct_btn");
const choosenNum = document.querySelector("#choosen_number");

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
}

//extra functions
function disabledBtn() {
  console.log("disabled()");
  tooHighBtn.disabled = false;
  tooLowBtn.disabled = false;
  correctBtn.disabled = false;
}

//computers choice
function generateChoice() {
  let compGuess = compChoice(100, 0);
  compResult.innerHTML = `Computer guess is ${compGuess}`;
}

function confirmChoice() {}
