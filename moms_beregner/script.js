"use strict"
const inputEl = document.querySelector("#input");
const submitBtn = document.querySelector(".submit")
const priceWithTax = document.querySelector("#total_price");
const mainPrice = document.querySelector("#main_price");

// konstant som er moms 25%
 const moms = 25;
 

 submitBtn.addEventListener("click",shwototalPrice);

 //Function som vises i konsolen
 function shwoPrice(mainPrice, moms=25){
    console.log(` prisen inklusiv moms: ${(mainPrice/100)*moms+(mainPrice)} kr`)
 }
 //function kaldes med parameter 100 (100kr) grunden til moms ikke sendes med = defineret som et default parameter. 
 shwoPrice(100)

 //funktionen er kaldt via en eventListner på knappen SubmitBtn.
 function shwototalPrice(){
   //variablen basePrice defineres med værdien fra inputfeltet (parseFloat indikere at værdi godt må være kommatal)
   let basePrice = parseFloat(inputEl.value);

   //Her checkes om det der skrives i inputfeltet er tal eller bogstaver. (er det tilfældet skrives en besked på skærmen.)
if (isNaN(basePrice)){
     mainPrice.textContent = "skriv et beløb"
     priceWithTax.textContent = "";
     return;
}

//en variabel for prisen med moms defineres med en udregning som værdi.
let totalPrice = (basePrice/100) * moms + (basePrice);
// mainPrice skrives ud i DOM under "Price without Tax" (toFixed(2) er en metode som fortæller at de tal der kommer ud kun må havde to decimaler.)
mainPrice.textContent =  basePrice.toFixed(2) + "kr"
priceWithTax.textContent =  totalPrice.toFixed(2) + "kr"
 }
