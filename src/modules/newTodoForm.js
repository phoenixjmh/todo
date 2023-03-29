import drawExistingTodos from "./drawExistingTodos";
import {format} from "date-fns";
import Todo from "./Todo";
import saveWork from "./Storage";
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
  newTodoForm.id='todo-form';
  let titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "form-todo-title");
  titleLabel.textContent = "todo:";
  let titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.id = "form-Todo-title";
 
  let createButton = document.createElement("button");
  createButton.textContent = "+Add";
  createButton.classList.add("form-create-td");

  let cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.classList.add("form-remove-td");
  
  let buttonPanel=document.createElement('div')
  buttonPanel.id='form-buttons-td';

  buttonPanel.appendChild(createButton);
  buttonPanel.appendChild(cancelButton);

  newTodoForm.appendChild(titleLabel);
  newTodoForm.appendChild(titleInput);
  
  newTodoFormDiv.appendChild(newTodoForm);
  newTodoFormDiv.appendChild(buttonPanel);
  document.body.appendChild(newTodoFormDiv);
  
  titleInput.focus();
  titleInput.onblur=()=>{
    if(titleInput.value!=='')
    addToDOM();
    else
    newTodoFormDiv.remove();
  }
  cancelButton.onclick = ()=>{
    newTodoFormDiv.remove();
  }
  newTodoForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    addToDOM();
  })
  createButton.addEventListener("click", () => {
    addToDOM();
  });

  const addToDOM=()=>{
    let date='Set Date';
  
    

    if(titleInput.value!==''){

      let tempTodoName = new Todo(titleInput.value,date,totalTodos());
    
    project.addTodo(tempTodoName);
    newTodoFormDiv.remove();
    drawExistingTodos(pm,project, displayPanel);
    saveWork(pm);
      }
  }
};
export default createNewTodoForm;
