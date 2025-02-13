"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};
//decalred an object with our variables filterBy, sortDir, and sortBy;
const settings = {
  filterBy: "all",
  sortDir: "asc",
  sortBy: "name",
};

function start() {
  console.log("ready");

  //Add event-listeners to filter and sort buttons
  registerButtons();

  loadJSON();
}

//filter Buttons action function
function registerButtons() {
  //select all the buttons with the data attibute action="filter".
  document.querySelectorAll("[data-action='filter']").forEach((button) => {
    button.addEventListener("click", selectFilter);
  });
  document.querySelectorAll("[data-action='sort']").forEach((button) => {
    button.addEventListener("click", selectSort);
  });
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first
  displayList(allAnimals);
}

function selectFilter(event) {
  //creat a const there take paramter event (tells which data should been seen when the filterList is called)
  const filter = event.target.dataset.filter;
  //The function setFilter will be called which the choosen data-filter anttribute in it.
  setFilter(filter);
}

//setFilter is a function creating only for calling the function buildList()
function setFilter(filter) {
  settings.filterBy = filter;
  buildList();
}

function selectSort(event) {
  //creat a const there take paramter event (tells which data should been seen when the sortList is called)
  const sortBy = event.target.dataset.sort;
  // creat a const there take paramter event (Here is the data anttibute sortDirection which is contains the value "asc")
  const sortDir = event.target.dataset.sortDirection;

  //Find the old sortby element. (creating a const which contain the selected data attribute)
  const oldElement = document.querySelector(`[data-sort=${settings.sortBy}]`);
  //removing the class sortby
  oldElement.classList.remove("sortby");

  //Indicate active sort. (if the user click on Name the <th> element will name will get the class sortby)
  event.target.classList.add("sortby");

  //toggle the direction from desc or asc
  if (sortDir === "asc") {
    event.target.dataset.sortDirection = "desc";
  } else {
    event.target.dataset.sortDirection = "asc";
  }

  //The function setSort will be called whith two parameters the choosen data-sort anttribute and the data-direction who is the value of sortBy and sortDir.
  console.log(`user selected ${sortBy} - ${sortDir}`);
  setSort(sortBy, sortDir);
}
//creating a setSort() which take two parameters sortBy and sortDir.
function setSort(sortBy, sortDir) {
  settings.sortBy = sortBy;
  settings.sortDir = sortDir;
  buildList();
}
function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}
//Filter functions take the allAnimals list.
function filterList(filteredList) {
  //   let filteredList = allAnimals;
  if (settings.filterBy === "cat") {
    filteredList = allAnimals.filter(isCat);
  } else if (settings.filterBy === "dog") {
    filteredList = allAnimals.filter(isDog);
  }
  //The function return the filteredList of allAnimals to which function who will call it.
  return filteredList;
}
//a function there return either animaltype dog or cat.
function isCat(animal) {
  return animal.type === "cat";
}
function isDog(animal) {
  return animal.type === "dog";
}

function sortList(sortedList) {
  //This is the primary list with all animals.
  //   let sortedList = allAnimals;
  //declare a const to use to change the order direction in sortByProperty()
  let direction = 1;
  if (settings.sortDir === "desc") {
    direction = -1;
  } else {
    settings.direction = 1;
  }

  //use the sort methode .sort() on the primary list allAnimals.
  sortedList = sortedList.sort(sortByProperty);

  //The function sortByProperty which is called in the sortList() as parameter in the .sort() Methode. This function recive two parameters animalA and AnimalB
  function sortByProperty(animalA, animalB) {
    //this statment checks the order of the list and sorted the values name, desc, type and age in a decenten order (from 1 to infinity or a-z).
    if (animalA[settings.sortBy] < animalB[settings.sortBy]) {
      return -1 * direction;
    } else {
      return 1 * direction;
    }
  }
  // the function return the new sortedList to the function who calls it.
  return sortedList;
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function buildList() {
  //create a const which contain the filterList() with the original list allAnimals[];
  const currentList = filterList(allAnimals);
  //A new const called sortedList contains the new version of the currentList, and now the list is sorted.
  const sortedList = sortList(currentList);
  //the new list currentList will be sent as a parameter to the displayList().
  displayList(sortedList);
}

function displayAnimal(animal) {
  // create clone
  const clone = document
    .querySelector("template#animal")
    .content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
