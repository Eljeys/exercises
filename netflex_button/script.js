const nextEpisodeBtn = document.querySelector("#loading_button");
const body = document.querySelector("body");

// nextEpisodeBtn.addEventListener("click", () => {
//   console.log("Der blev klikket.");
// });

//brugeren fortager sig intet (animationen kører til ende, og der sker noget)
nextEpisodeBtn.addEventListener("animationend", changeBackGround);

function changeBackGround() {
  body.style.backgroundColor = "red";
  nextEpisodeBtn.classList.add("hidden");
}
const html = document.querySelector("html");

//bruger klikker/bevæger mussen på knappen (animationen kører til ende)
//brugeren klikker

html.addEventListener("mousemove", removeEvent);
function removeEvent() {
  console.log("remove animation");
  nextEpisodeBtn.addEventListener("remove", nothing);
}

function nothing() {
  nextEpisodeBtn.addEventListener("click", changeBackGround);
}
