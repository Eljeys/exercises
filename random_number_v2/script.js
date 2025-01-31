function mathRandom() {
  const ranNum = Math.floor(Math.random() * 101); //kan skrives som Math.floor(Math.random() * (100-0+1))
  document.querySelector("h1").textContent = ranNum;
}

console.log(mathRandom());
