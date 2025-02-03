window.addEventListener("load", start);
// import { computer } from "./modul.js";
const inputEl = document.querySelector("#inpul_field").value;
const startBtn = document.querySelector("#start_btn");
const tooLowBtn = document.querySelector("#too_Low_btn");
const tooHighBtn = document.querySelector("#too_high_btn");
const correctBtn = document.querySelector("#correct_btn");
const choosenNum = document.querySelector("#choosen_number");
const resetBtn = document.querySelector("#reset_btn");

let low = 0;
let high = 100;
let compGuess = Math.floor((low + high) / 2);
const compResult = document.querySelector("#comp_guess");
const winText = document.querySelector("#modal_text");
let numberOfGuess = 0;


//Load function
function start() {
  startBtn.classList.add("button_hover");
  document.querySelector("input").disabled = false;
  startBtn.classList.add("button_hover")
  removeHover();
  tooHighBtn.disabled = true;
  tooLowBtn.disabled = true;
  correctBtn.disabled = true;
  resetBtn.classList.add("hidden","reset_btn")
  startBtn.addEventListener("click", startGame);
}

//click events
function startGame() {
  startBtn.classList.remove("button_hover")
  startBtn.disabled = true;
  startBtn.classList.add("disabled")
  document.querySelector("input").disabled = true;
  removedisabledBtn();
  hoverBtn();
  choosenNum.textContent = ` Your choosen: ${inputEl} as the number`;
  generateChoice();
}

//extra functions
function removedisabledBtn() {
  tooHighBtn.disabled = false;
  tooLowBtn.disabled = false;
  correctBtn.disabled = false;
  tooLowBtn.classList.remove("button_hover");
tooHighBtn.classList.remove("button_hover");
correctBtn.classList.remove("button_hover");
}

//computers choice
function generateChoice() {
  console.log("computeren gætter på:", compGuess);
  compGuess = Math.floor((low + high) / 2);
  compResult.innerHTML = `Computer guess is: ${compGuess}`;
  numberOfGuess += 1;
  console.log(numberOfGuess);
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
 resetBtn.classList.remove("hidden")
 resetBtn.classList.add("button_hover");
 removeHover();
removedisabledBtn();
 tooHighBtn.disabled = true;
 tooLowBtn.disabled = true;
 correctBtn.disabled = true;
 compResult.innerHTML = "";
 choosenNum.textContent = "";
 winText.textContent = `Yes I only Used ${numberOfGuess} guess!`

});

resetBtn.addEventListener("click", ()=>{
  clear();
})

function clear() {
  location.reload();
}

//hover function:
function hoverBtn(){
tooLowBtn.classList.add("button_hover");
tooHighBtn.classList.add("button_hover");
correctBtn.classList.add("button_hover");
tooLowBtn.classList.remove("disabled");
tooHighBtn.classList.remove("disabled");
correctBtn.classList.remove("disabled");
}
//remove hover function: 
function removeHover(){
tooLowBtn.classList.remove("button_hover");
tooHighBtn.classList.remove("button_hover");
correctBtn.classList.remove("button_hover");
tooLowBtn.classList.add("disabled");
tooHighBtn.classList.add("disabled");
correctBtn.classList.add("disabled");
}