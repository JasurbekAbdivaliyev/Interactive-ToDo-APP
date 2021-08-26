// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".filter");
const todoContainer = document.querySelector('.todo-container');

// Event Listenars
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
todoFilter.addEventListener("click", filterTodo);

// Functions

function addTodo(event) {
  // Prevent form submitting
  event.preventDefault();

  // Todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  if(todoInput.value === "") todoContainer.toggle();
  todoInput.value = ""; 
  todoDiv.appendChild(newTodo);

  // Check button
  const completeButton = document.createElement("button");
  completeButton.innerHTML = "<i class='fas fa-check'></i>";
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);

  // delete Button
  const uncompleteButton = document.createElement("button");
  uncompleteButton.innerHTML = "<i class='fas fa-trash'></i>";
  uncompleteButton.classList.add("uncomplete-btn");
  todoDiv.appendChild(uncompleteButton);

  // Append to List
  todoList.appendChild(todoDiv);

  // todoInput value remove
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // delete
  if (item.classList[0] === "uncomplete-btn") {
    const todo = item.parentElement;
    // animatsiya
    todo.classList.add("trash");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // check icon
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
