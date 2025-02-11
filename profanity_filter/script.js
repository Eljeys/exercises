const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];
//step 1
const textElement = document.querySelector("#text");
const updateBtn = document.querySelector("#button");
const messageDialog = document.querySelector("#message_Dialog");
const closeDialogBtn = document.querySelector("#close_Dialog");

//step 2
let isUpdated = false;

//step 3
function replaceWords(text) {
  let newText = text;
  curseWords.forEach((word) => {
    const regex = new RegExp(word.bad, "g");
    newText = newText.replace(
      regex,
      `<span class="highligted_word">${word.good}</span>`
    );
  });
  return newText;
}
// step 4
updateBtn.addEventListener("click", updateText);
// step 5
function updateText() {
  if (!isUpdated) {
    const updateText = replaceWords(textElement.textContent);
    textElement.innerHTML = updateText;
    isUpdated = true;
  } else {
    messageDialog.showModal();
  }
}
//step 6
closeDialogBtn.addEventListener("click", () => {
  messageDialog.close();
});

/*-------------------------------------------------- */

// step 1: erklære variabler der fanger <p>, <button>, og <dialog> fra HTML.

// step 2: erklærer mit flag (Det som holde styr på og teksten er opdateret)

/* step 3: laver en function replaceWords som tager parameteret text.
I selve functionen erklæres en variable newText som får parameteret text som værdi.
Dernæst bliver curseWord Array igennem ved hjælp af forEach som tager parameteret word, som dækker over properties bad og good, for hver element der bliver kørt igennem får variablen newText(som er selve teksten) tildelt sig selv som værdi, i sammenspil med functionen replace() som indeholder en regular expression(word.bad, 'g') word.bad er alle de dårlige ord, som "var" og "float", og 'g' er en flag, der fortæller at replace ikke bare skal fjerne den første forekomst af et dårligt ord, men alle forekomster af dårlige ord i teksten. derefter kommer word.good som referer til de gode ord som "const" og "grid". 
 Til sidst i function replaceWords() returnes newText, men nu indeholder den en tekst streng med alle de gode ord i stedet for de dårlige ord*/

//step 4: update knappen får tildelt en event click, som når knappes klikkes referers der til function updateText()

/*5 I function updateText spørgers der til om isUpdated Boolean er false eller true fra begyndelsen af. Er den false bliver en variablen updateText tildelse værdien function replaceWords med paramteret textElement, som er <p> I HTML og tilføres .textContent så den opdateret tekst bliver vist på HTML siden, og dernæst sættes boolean isUpdated til true.
Er det tilfældet at isUpdated er true vil der springes videre til else i updateText functionen, og en kodeblok indeholdende variablen messageDialog som tager fat i HTML elementet dialog + en metode ved navn showModal vil blive kaldt. Dette vise en besked på skærmen som gør brugeren opmærksom på at teksten er opdateret. Dernæst vil man kunne klikke på lukknappen på beskeden og messageDialog med metoden close() vil blive kaldt. 
*/
