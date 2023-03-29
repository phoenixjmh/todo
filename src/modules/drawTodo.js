/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
/* eslint-disable linebreak-style */
import { format } from "date-fns";
import drawExistingTodos from "./drawExistingTodos";
import removeElement from "./removeElement";
import saveWork from "./Storage";

const drawTodo = (todo, displayPanel, project, pm) => {
  const expandArrow = document.querySelector("#expand-arrow");
  const sidePanel = document.querySelector(".side-panel");
  expandArrow.ondragover = () => {
    displayPanel.parentElement.classList.remove("expand-panel");
    sidePanel.classList.remove("display-open");
    displayPanel.parentElement.classList.add("close-panel");
    sidePanel.classList.add("display-closed");
  };

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  todoDiv.id = `todo-${todo.id}`;
  todoDiv.setAttribute("draggable", "true");

  const todoCheckbox = document.createElement("input");
  todoCheckbox.setAttribute("type", "checkbox");
  todoCheckbox.classList.add("todo-checkbox");
  const todoTitle = document.createElement("p");
  todoTitle.classList.add("title");
  todoTitle.textContent = todo.title;

  const todoDueDateH4 = document.createElement("p");
  todoDueDateH4.classList.add("due-date");
  todoDueDateH4.textContent = todo.dueDate;

  const newInputDate = document.createElement("input");
  newInputDate.setAttribute("type", "date");
  newInputDate.classList.add("todo-new-date");
  newInputDate.value = todo.dueDate;

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-todo");
  removeButton.textContent = "X";
  const removeButtonContainer = document.createElement("div");
  removeButtonContainer.classList.add("remove-button-container");
  removeButtonContainer.appendChild(removeButton);
  const checkboxContainer = document.createElement("div");
  checkboxContainer.classList.add("checkbox-container");
  checkboxContainer.appendChild(todoCheckbox);
  todoDiv.appendChild(checkboxContainer);
  todoDiv.appendChild(todoTitle);
  todoDiv.appendChild(todoDueDateH4);
  todoDiv.appendChild(removeButtonContainer);
  displayPanel.appendChild(todoDiv);

  const newInputText = document.createElement("input");
  newInputText.classList.add("todo-new-title");
  newInputText.value = todo.title;

  removeButton.onclick = () => {
    removeElement(project, todo.id);
    todoDiv.remove();

    saveWork(pm);
  };

  todoTitle.onclick = () => {
    todoTitle.appendChild(newInputText);
    newInputText.focus();
  };

  todoDueDateH4.onclick = () => {
    todoDueDateH4.appendChild(newInputDate);
    newInputDate.focus();
  };

  newInputText.onblur = () => {
    todo.title = newInputText.value;
    todoTitle.textContent = todo.title;
    newInputText.remove();
    saveWork(pm);
  };

  newInputText.onkeyup = ({ key }) => {
    if (key === "Enter") {
      newInputText.blur();
    }
  };

  newInputDate.onkeyup = ({ key }) => {
    if (key === "Enter") newInputDate.blur();
  };

  todoDiv.ondragstart = (event) => {
    const obj = { todoObj: todo, projectObj: project };
    event.dataTransfer.setData("text", JSON.stringify(obj));
  };

  todoDiv.ondragend = (event) => {
    event.preventDefault();
    drawExistingTodos(pm, project, displayPanel);
  };
  newInputDate.onblur = () => {
    if (newInputDate.value !== "") {
      const date = format(
        new Date(`${newInputDate.value}T00:00`),
        "MM/dd/yyyy"
      );
      todo.dueDate = date;
      todoDueDateH4.valueAsDate = date;
      todoDueDateH4.textContent = todo.dueDate;
      saveWork(pm);
      drawExistingTodos(pm, project, displayPanel);
    }
    newInputDate.remove();
  };
  return todoDiv;
};
export default drawTodo;
