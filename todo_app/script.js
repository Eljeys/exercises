document.addEventListener("DOMContentLoaded", loadTodoList);

const todoHeadline = document.querySelector(".todo_header h1");
const addTaskBtn = document.getElementById("add_task_btn");
const todoForm = document.getElementsByClassName("input_container");
const inputField = document.getElementById("input_field");
//de elementer som tilføjes i userinterfacet, når objekt bliver skabt.

//elementer tilhørende todo list genvejsmenu
const taskInProgress = document.querySelector(".todo_in_progress");
let numberOfTasks = document.querySelector(".number_of_tasks");
let binNumber = document.querySelector("#bin_number");
//elementer tilhørende done todo list genvejsmenu
const finishedTodos = document.querySelector(".todo_finish");
let numberOfDoneTasks2 = document.querySelector(".number_of_tasks2");
let addedTasks = 0;
let finishedtaks = 0;
//de elementer der hører til afdelingen af færdige tasks.
const clearAllTasksBtn = "";

//alt bagvedlæggende logik
let taskArray = [];
let finishTaskArray = [];
let deletedTaskArray = [];
const todos = {};

function loadTodoList() {
  const storedTasks = JSON.parse(localStorage.getItem("opgave")) || [];
  taskArray = storedTasks;
  const storedTasks2 =
    JSON.parse(localStorage.getItem("færdige Opgaver")) || [];
  finishTaskArray = storedTasks2;

  const storedTasks3 =
    JSON.parse(localStorage.getItem("slettet opgaver")) || [];
  deletedTaskArray = storedTasks3;
  displayTodoList();
  updateTaskCount();
}

function saveTodoList() {
  localStorage.setItem("opgave", JSON.stringify(taskArray));
  localStorage.setItem("færdige Opgaver", JSON.stringify(finishTaskArray));
  localStorage.setItem("slettet opgaver", JSON.stringify(deletedTaskArray));
}

function generateId() {
  const id = Math.floor(Math.random() * 2000);
  return id;
}

function createTodoObejct(taskText) {
  return {
    task: taskText,
    isDone: false,
    id: generateId(),
  };
}

function addTaskItem(taskText) {
  const newTodo = createTodoObejct(taskText);
  taskArray.push(newTodo);

  saveTodoList();
  displayTodoList();
  updateTaskCount();
}

function displayTodoList() {
  console.log(taskArray.length);
  const todoContainer = document.querySelector(".todo_list_container");
  todoContainer.textContent = "";

  taskArray.forEach((todo) => {
    const item_container = document.createElement("div");
    item_container.classList.add("list_item");

    const listItem = document.createElement("p");
    listItem.textContent = todo.task;

    const doneTaskBtn = document.createElement("button");
    doneTaskBtn.classList.add("done_task_btn");
    doneTaskBtn.textContent = "udført";
    doneTaskBtn.addEventListener("click", () => completeTask(todo.id));

    item_container.appendChild(listItem);
    item_container.appendChild(doneTaskBtn);
    todoContainer.appendChild(item_container);
  });
}

function completeTask(taskId) {
  const taskIndex = taskArray.findIndex((task) => task.id === taskId);
  if (taskIndex > -1) {
    taskArray[taskIndex].isDone = true;
    finishTaskArray.push(taskArray.splice(taskIndex, 1)[0]);
    saveTodoList();
    displayTodoList();
    updateTaskCount();
  }
}

//function for undo task
function undoTask(taskId) {
  const finishedTaskIndex = finishTaskArray.findIndex(
    (task) => task.id === taskId
  );
  if (finishedTaskIndex > -1) {
    finishTaskArray[finishedTaskIndex].isDone = false;
    taskArray.push(finishTaskArray.splice(finishedTaskIndex, 1)[0]);
    saveTodoList();
    openFinisedTab();
    updateTaskCount();
  }
}

function deletedTasks(taskId) {
  const deletedTaskIndex = finishTaskArray.findIndex(
    (task) => task.id === taskId
  );
  if (deletedTaskIndex > -1) {
    finishTaskArray[deletedTaskIndex].isDone = true;
    deletedTaskArray.push(finishTaskArray.splice(deletedTaskIndex, 1)[0]);
    saveTodoList();
    openFinisedTab();
    updateTaskCount();
  }
}

function updateTaskCount() {
  numberOfTasks.textContent = taskArray.length;
  numberOfDoneTasks2.textContent = finishTaskArray.length;
  binNumber.textContent = deletedTaskArray.length;
}

//prevent Default.
addTaskBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const taskText = inputField.value;
  if (taskText.trim() !== "") {
    addTaskItem(taskText);
    inputField.value = "";
  }
});

//Finished task logic
const todoFinishedBtn = document.querySelector(".todo_finish");
todoFinishedBtn.addEventListener("click", openFinisedTab);

function openFinisedTab() {
  todoHeadline.style.color = "";
  todoHeadline.style.color = "#ececec;";
  todoHeadline.textContent = "Færdige Todos";
  const todoContainer = document.querySelector(".todo_list_container");
  todoContainer.classList.add("hide");

  const finishedTaskContainer = document.querySelector(
    ".finished_task_container"
  );
  finishedTaskContainer.classList.remove("hide");
  const bin = document.querySelector(".bin_container");
  bin.classList.remove("hide");
  const todoForm = document.querySelector(".input_container");
  todoForm.classList.add("hide");

  //selve display finished tasks
  finishedTaskContainer.textContent = "";
  finishTaskArray.forEach((todo) => {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("list_item");
    const bottonContainer = document.createElement("div");
    bottonContainer.classList.add("button_container");

    const listItem = document.createElement("p");
    listItem.textContent = todo.task;

    const undoTaskBtn = document.createElement("button");
    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.classList.add("delete_task_btn");
    deleteTaskBtn.textContent = "slet";
    undoTaskBtn.classList.add("done_task_btn");
    undoTaskBtn.textContent = "fortryd";

    undoTaskBtn.addEventListener("click", () => undoTask(todo.id));

    deleteTaskBtn.addEventListener("click", () => deletedTasks(todo.id));

    itemContainer.appendChild(listItem);
    bottonContainer.appendChild(deleteTaskBtn);
    bottonContainer.appendChild(undoTaskBtn);
    itemContainer.appendChild(bottonContainer);
    finishedTaskContainer.appendChild(itemContainer);
  });
}

//Logik for slet knap
//todo task in progress
const todoTabBtn = document.querySelector(".todo_in_progress");
todoTabBtn.addEventListener("click", openTodoTab);

function openTodoTab() {
  todoHeadline.style.color = " rgb(0, 171, 231)";
  todoHeadline.textContent = "Igangværende Todos";
  const finishedTaskContainer = document.querySelector(
    ".finished_task_container"
  );
  finishedTaskContainer.classList.add("hide");
  const todoForm = document.querySelector(".input_container");
  todoForm.classList.remove("hide");
  const bin = document.querySelector(".bin_container");
  bin.classList.add("hide");
  const todoContainer = document.querySelector(".todo_list_container");
  todoContainer.classList.remove("hide");

  displayTodoList();
}

document.querySelector("#bin_icon").addEventListener("click", () => {
  deletedTaskArray = [];
  localStorage.removeItem("slettet opgaver");
  console.log("skraldeSpanden tømmes", deletedTaskArray.length);
  updateTaskCount();
});

chrome.tabs.create({
  url: "index.html",
  active: true, // Åbn i det aktuelle vindue
  // Eller for at åbne i et nyt vindue:
  // windowId: chrome.windows.WINDOW_ID_CURRENT // Eller et specifikt vindues-id
});
