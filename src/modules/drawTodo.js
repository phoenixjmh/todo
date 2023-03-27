import drawExistingTodos from "./drawExistingTodos";
import removeElement from "./removeElement";
import {format} from "date-fns"
const drawTodo = (todo, displayPanel, project, pm) => {
  const expandArrow=document.querySelector('#expand-arrow');
  const sidePanel=document.querySelector('.side-panel');
  expandArrow.ondragover=()=>{
    displayPanel.parentElement.classList.remove('expand-panel');
      sidePanel.classList.remove('display-open');
      displayPanel.parentElement.classList.add('fifty-fifty-display');
      sidePanel.classList.add('fifty-fifty-sidepanel');
  };
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  todoDiv.id = "todo-" + todo.id;
  todoDiv.setAttribute("draggable", "true");

  let todoCheckbox = document.createElement("input");
  todoCheckbox.setAttribute("type", "checkbox");
  todoCheckbox.classList.add("todo-checkbox");
  let todoTitle = document.createElement("p");
  todoTitle.classList.add("title");
  todoTitle.textContent = todo.title;

  let todoDueDateH4 = document.createElement("h4");
  todoDueDateH4.classList.add("due-date");
  todoDueDateH4.textContent = todo.dueDate;

  let newInputDate = document.createElement("input");
  newInputDate.setAttribute("type", "date");
  newInputDate.classList.add("todo-new-date");
  newInputDate.value = todo.dueDate;

  let removeButton = document.createElement("button");
  removeButton.classList.add("remove-todo");
  removeButton.textContent = "Remove";
  todoDiv.appendChild(todoCheckbox);
  todoDiv.appendChild(todoTitle);
  todoDiv.appendChild(todoDueDateH4);
  todoDiv.appendChild(removeButton);
  displayPanel.appendChild(todoDiv);

  

  let newInputText = document.createElement("input");
  newInputText.classList.add("todo-new-title");
  newInputText.value = todo.title;

  removeButton.addEventListener("click", () => {
    removeElement(project, todo.id);
    todoDiv.remove();

    localStorage.setItem("packageManager", JSON.stringify(pm));
  });

  todoTitle.addEventListener("click", () => {
    todoTitle.appendChild(newInputText);
    newInputText.focus();
  });
  newInputText.onblur = () => {
    todo.title = newInputText.value;
    todoTitle.textContent = todo.title;
    newInputText.remove();
    localStorage.setItem("packageManager", JSON.stringify(pm));
  };
  newInputText.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
      newInputText.blur();
    }
  });

  todoDiv.ondragstart = (event) => {
    const obj = { todoObj: todo, projectObj: project };
    event.dataTransfer.setData("text", JSON.stringify(obj));
  };

  todoDiv.ondragend = (event) => {
    event.preventDefault();
    drawExistingTodos(pm, project, displayPanel);
    
  };
  todoDueDateH4.addEventListener("click", () => {
    todoDueDateH4.appendChild(newInputDate);
    newInputDate.focus();
  });
  newInputDate.onblur = () => {
    if (newInputDate.value !== "") {
      let date=format(new Date(`${newInputDate.value}T00:00`),'MM/dd/yyyy');
      todo.dueDate = date;
      todoDueDateH4.valueAsDate = date;
      todoDueDateH4.textContent = todo.dueDate;
      localStorage.setItem("packageManager", JSON.stringify(pm));
    }
    newInputDate.remove();
  };
  newInputDate.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") newInputDate.blur();
  });
  return todoDiv;
};
export default drawTodo;
