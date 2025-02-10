"use strict";

const select = document.querySelector("#select");
const body = document.querySelector("body");

select.addEventListener("change", selectChange);

function selectChange(evt) {
  body.dataset.theme = evt.target.value;
}
