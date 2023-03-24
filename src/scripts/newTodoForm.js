import drawTodo from "./drawTodo";

import Todo from "./Todo";
const createNewTodoForm = (pm,project, displayPanel) => {
  let newTodoFormDiv = document.createElement("div");
  newTodoFormDiv.classList.add("create-todo-form");
  let newTodoForm = document.createElement("form");
  let titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "form-todo-title");
  titleLabel.textContent = "Title";
  let titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.id = "form-Todo-title";
  let dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "form-todo-dueDate");
  dueDateLabel.textContent = "Due Date";
  let dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("type", "text");
  dueDateInput.id = "form-todo-dueDate";
  let priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "form-todo-priority");
  priorityLabel.textContent = "Priority";
  let priorityInput = document.createElement("input");
  priorityInput.setAttribute("type", "text");
  priorityInput.id = "form-todo-priority";
  let createButton = document.createElement("button");
  createButton.textContent = "Create";
  createButton.classList.add("form-button-todo");
  newTodoForm.appendChild(titleLabel);
  newTodoForm.appendChild(titleInput);
  newTodoForm.appendChild(dueDateLabel);
  newTodoForm.appendChild(dueDateInput);
  newTodoFormDiv.appendChild(newTodoForm);
  newTodoFormDiv.appendChild(createButton);
  document.body.appendChild(newTodoFormDiv);
  createButton.addEventListener("click", () => {
    let tempTodoName = new Todo(
      titleInput.value,
      " ",
      dueDateInput.value,
      priorityInput.value,
      project.getAll().length
    );
    project.addTodo(tempTodoName);
    newTodoFormDiv.remove();
    drawTodo(pm,project, displayPanel);
    localStorage.setItem("packageManager", JSON.stringify(pm));

  });
};
export default createNewTodoForm;
