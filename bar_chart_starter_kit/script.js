const list = document.querySelector("ul");

const barArray = [];

const li = document.createElement("li");
li.style.setProperty("--height", "30");
list.appendChild(li);

setInterval(generateBars, 1000);

function generateBars(){
    const randomNum = Math.round(Math.random()*100)
    barArray.push(randomNum);
    // console.log(barArray)
    if (barArray.length>=20){
        barArray.shift();
    }
}