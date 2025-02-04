const list = document.querySelector("ul");
let barArray = [];

const li = document.createElement("li");
li.style.setProperty("--height", "30");
list.appendChild(li);

function  CustomerCount (){
    return Math.round(Math.random()*100)
}

function generateBars(){
    barArray.push(CustomerCount());
    if (barArray.length>20){
        barArray.shift();
    }
    list.innerHTML ="";
    barArray.forEach((value)=>{
        const li = document.createElement("li");
        li.style.setProperty("--height", `${CustomerCount()}`);
        list.appendChild(li);
    })
}
setInterval(generateBars,1000);

