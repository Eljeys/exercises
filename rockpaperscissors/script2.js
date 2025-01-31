// window.addEventListener("load", start);
"use strict"
const btnContainer = document.querySelector("#buttons");
const scissorsBtn = document.querySelector(".scissors");
const paperBtn = document.querySelector(".paper");
const rockBtn = document.querySelector(".rock");
  


const computerOption = ["rock", "paper", "scissors"];
// const playerOption = ["rock", "paper", "scissor"];
const ComputerChoice = computerOption[Math.floor(Math.random() * computerOption.length)];


let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2"); //computeren
// let players = document.querySelector(".player")

//player array
playerChoice = [];


// console.log(ranNum);

// rockBtn.addEventListener("click", playersChoice);
// paperBtn.addEventListener("click", playersChoice);
// scissorsBtn.addEventListener("click", playersChoice);

rockBtn.addEventListener("click", ()=>{
    playerChoice.push("rock");
    console.log(playerChoice);
    startGame()
});
paperBtn.addEventListener("click", ()=>{
    playerChoice.push("paper");
    console.log(playerChoice);
    startGame();
});
scissorsBtn.addEventListener("click", ()=>{
    playerChoice.push("scissor");
    console.log(playerChoice);
    startGame();
});





function startGame(){
    console.log("startGame() kører.")
    btnContainer.classList.add("disabled");
    getComputerChoice();
    
    
    
    
    shakeHands()
    player1.addEventListener("animationend", showHands);
    player2.addEventListener("animationend", showHands);
}

//genere et random tal fra 0-2 
function getComputerChoice(){
    let computerOption = ["rock", "paper", "scissors"];
    let ComputerChoice = computerOption[Math.floor(Math.random() * computerOption.length)];
    return ComputerChoice;
}
let computersHand = getComputerChoice();
console.log(`computeren valgte: ${computersHand}`);



// function playersChoice (){
    // document.querySelectorAll("button").forEach(button =>{
    //     button.addEventListener("click", function(){
    //     playersHand = this.classList[0];  
    //     // console.log(`player1 valgte: ${playersHand}`)
    //    startGame();
    //     })
    // }) 
// let playersChoice = playersHand;

// }

function shakeHands() {
     players = document.querySelectorAll(".player");
    players.forEach((player) => {
      player.classList.add("shake");
    });
  }








function checkWinner(){
    if (computersHand==="rock" && playerChoice === "rock"){
        return draw();
    }
    if(computersHand==="paper" && playerChoice === "paper"){
        return draw();
    }
    if(computersHand==="scissors" && playerChoice === "scissors"){
        return draw();
    }

}
const loserText = document.querySelector("#lose");
const drawText = document.querySelector("#draw");
function draw() {
  drawText.classList.remove("hidden");
}

function showHands(){
    playersChoice = [];
    player1.removeEventListener("animationend", showHands);
    player2.removeEventListener("animationend", showHands);
    //kan måske gøre brug af && i if statements
    console.log("Showhands")
    if (computersHand==="paper" && playerChoice==="paper"){
        player1.classList.remove("shake");
        player2.classList.remove("shake");
        player1.classList.add("paper");
        player2.classList.add("paper");
    }
    else if(computersHand==="scissors"){
        player2.classList.remove("shake");
        player2.classList.add("scissors");
    }
    else{
        player2.classList.remove("paper");
        player2.classList.remove("scissors");
    }
    // player2.classList.remove("paper");
    // player2.classList.remove("scissors");
    btnContainer.classList.remove("disabled");
    players.classList.add("shake");
    // checkWinner();
}



