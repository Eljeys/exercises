window.addEventListener("load", start);
const btnContainer = document.querySelector("#buttons");
const scissorsBtn = document.querySelector(".scissors");
const paperBtn = document.querySelector(".paper");
const rockBtn = document.querySelector(".rock");
const deletClass = document.querySelectorAll(".player");
// const playerOption = [paperBtn, rockBtn, scissorsBtn];

const computerOption = ["rock", "paper", "scissor"];
const playerOption = ["rock", "paper", "scissor"];
let playersChoice = [];
const ranNum = computerOption[Math.floor(Math.random() * computerOption.length)];


//erklare variabler for players
let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2"); //computeren
//EventListener

paperBtn.addEventListener("click", () => {
  playersChoice === playerOption[1];
  startGame();
});
scissorsBtn.addEventListener("click", () => {
  playersChoice === playerOption[2];
  startGame();
});

// scissorsBtn.addEventListener("click", () => {
//   playerOption = playerOption[2];
//   startGame();
// });
// rockBtn.addEventListener("click", () => {
//   playerOption = playerOption[0];
//   startGame();
// });

function start() {
  console.log("siden er loaded");
}


//buttons interactions
// playerOption.forEach((option) => {
//   option.addEventListener("click", startGame);
// });

// playerOption.forEach((option) => {
//     option.addEventListener("click", startGame);
//   });

function startGame() {
  //   playersOption.push("rock", "paper", "scissor");
  btnContainer.classList.add("disabled");
  getComputerChoice();
  console.log(`${getComputerChoice()} = hånd`);
  console.log(`${playersChoice} = min hånd`);

  //-------------------------

  //-------------------------
  console.log(player2);
  shakeHands();
  player1.addEventListener("animationend", showHands);
  player2.addEventListener("animationend", shakeHands);
}

function getComputerChoice() {
  player2.removeEventListener("animationend", shakeHands);
  btnContainer.classList.remove("disabled");
  console.log(`computeren valgte: ${computerOption[ranNum]}`);
  if (computerOption[ranNum] === computerOption[0]) {
    player2.classList.add("rock");
  } else if (computerOption[ranNum] === computerOption[1]) {
    player2.classList.remove("shake");
    player2.classList.add("scissors");
  } else {
    player2.classList.remove("shake");
    player2.classList.add("paper");
  }
  return ranNum;
}

function showHands() {
  console.log(player1);
  player1.removeEventListener("animationend", showHands);
  console.log("animation ended");
  if (playersChoice === playerOption[1]) {
    player1.classList.remove("shake");
    player1.classList.add("paper");
  } else if (playersChoice === playerOption[2]) {
    player1.classList.remove("shake");
    player1.classList.add("scissors");
  }
  btnContainer.classList.remove("disabled");
}
// function showHands2() {
//   player2.removeEventListener("animationend", showHands2);
//   btnContainer.classList.remove("disabled");

//   console.log(`computeren valgte: ${computerOption[ranNum]}`);
//   if (computerOption[ranNum] === computerOption[0]) {
//     player2.classList.add("rock");
//   } else if (computerOption[ranNum] === computerOption[1]) {
//     player2.classList.remove("shake");
//     player2.classList.add("scissors");
//   } else {
//     player2.classList.remove("shake");
//     player2.classList.add("paper");
//   }
// }
// let disableBtn = document.querySelector("#button");

// rockBtn.addEventListener("click", rock);
// scissorsBtn.addEventListener("click", scissors);
// paperBtn.addEventListener("click", paper);

// function rock() {
//   console.log("sten!");
//   btnContainer.classList.add("disabled");
//   startGame();
// }
// function paper() {
//   console.log("paper");
//   btnContainer.classList.add("disabled");
//   startGame();
// }
// function scissors() {
//   console.log("scissor");
//   btnContainer.classList.add("disabled");
//   startGame();
// }

//game interactions
function shakeHands() {
  const players = document.querySelectorAll(".player");
  players.forEach((player) => {
    player.classList.add("shake");
  });
}
//game logic
const winnerText = document.querySelector("#win");
const loserText = document.querySelector("#lose");
const drawText = document.querySelector("#draw");

// function start() {
//   console.log("siden er loaded");
// }

// function startGame() {
//   console.log(randomselect());
//-------------------------

//-------------------------
//   console.log(player2);
//   shakeHands();
//   player1.addEventListener("animationend", showHands);
// }

// function showHands() {
//   console.log("animation ended");
//   player1.classList.remove("shake");
//   player1.classList.add("scissors");
//   console.log(player1);
// }

function checkWinner() {}

//text results
function draw() {
  drawText.classList.remove("hidden");
}

function winner() {
  winnerText.classList.remove("hidden");
}
function loser() {
  loserText.classList.remove("hidden");
}

// function randomselect() {
//   let playerSelect = Math.floor(Math.random() * 3) + 1;
//   return playerSelect;
// }
