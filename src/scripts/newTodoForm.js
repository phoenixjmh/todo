import drawExistingTodos from "./drawExistingTodos";
import {format} from "date-fns";
import Todo from "./Todo";
const createNewTodoForm = (pm,project, displayPanel) => {
  let totalTodos = ()=> {
    let sum=0;
    pm.getAll().forEach((p)=>{
      p.getAll().forEach((t)=> sum+=1);
    })
    return sum;
  }
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
  dueDateInput.setAttribute("type", "date");
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
    let date;
    if(dueDateInput.value!=='')
    date=format(new Date(`${dueDateInput.value}T00:00`),'MM/dd/yyyy');
    
    else
    date='Set Date';
    
    let tempTodoName = new Todo(
      titleInput.value,
      " ",
      date,
      priorityInput.value,
      totalTodos()
    );
    
    project.addTodo(tempTodoName);
    newTodoFormDiv.remove();
    drawExistingTodos(pm,project, displayPanel);
    localStorage.setItem("packageManager", JSON.stringify(pm));

  });
};
export default createNewTodoForm;
