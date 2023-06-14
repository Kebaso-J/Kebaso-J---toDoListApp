
// Selectors to get the HTML elements we want to interact with
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Event listeners for user interaction detection
 //when user presses the enter key, a new item is added to task list
todoInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addTodoItem();
  }
});
 //listens for the changes
todoList.addEventListener("change", function (event) {
  if (event.target && event.target.nodeName === "INPUT") {
    toggleTodoItem(event.target);
  }
});

// Functions
function addTodoItem() //adds a new task to the todo list
 {
  const task = todoInput.value.trim();
  if (task !== "") {
    const todoItem = createTodoItem(task);
    todoList.appendChild(todoItem);
    todoInput.value = "";
  }
}

function createTodoItem(task) {
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const label = document.createElement("span");
  label.textContent = task;
  todoItem.appendChild(checkbox);
  todoItem.appendChild(label);
  return todoItem;
}

function toggleTodoItem(checkbox) {
  const todoItem = checkbox.parentNode;
  todoItem.classList.toggle("completed");
}
