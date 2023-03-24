import drawExistingTodos from "./drawExistingTodos";
import removeElement from "./removeElement";

const drawTodo = (todo, displayPanel, project, pm) => {
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  todoDiv.id = "todo-" + todo.id;
  todoDiv.setAttribute("draggable", "true");
  todoDiv.ondragstart=((event)=>{
    const obj={todoObj:todo,projectObj:project};
    console.log("Hello from drag",obj);
    event.dataTransfer.setData('text',JSON.stringify(obj));
    
  });
  
  todoDiv.ondragend=((event)=>{
    console.log('Drag ended');
    event.preventDefault();
    drawExistingTodos(pm,project,displayPanel);
  });
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
newInputDate.setAttribute('type','date');
newInputDate.classList.add("todo-new-date");
newInputDate.value = todo.dueDate;
  todoDueDateH4.addEventListener('click',()=>{
     todoDueDateH4.appendChild(newInputDate);
     newInputDate.focus();

  });
  newInputDate.onblur = () => {
    if(newInputDate.value!=='')
    {
      todo.dueDate = newInputDate.value;
     todoDueDateH4.value = todo.dueDate;
     todoDueDateH4.textContent=todo.dueDate;
     localStorage.setItem("packageManager", JSON.stringify(pm));
     
    }
    newInputDate.remove();
  };
  newInputDate.addEventListener('keyup',({key})=>{
    if(key==="Enter")
    newInputDate.blur();
  });


  let removeButton = document.createElement("button");
  removeButton.classList.add("remove-todo");
  removeButton.textContent = "Remove";
  todoDiv.appendChild(todoCheckbox);
  todoDiv.appendChild(todoTitle);
  //todoDiv.appendChild(todoDescH4);
  todoDiv.appendChild(todoDueDateH4);
  todoDiv.appendChild(removeButton);
  displayPanel.appendChild(todoDiv);
  removeButton.addEventListener("click", () => {
    removeElement(project, todo.id);
    todoDiv.remove();
    console.log(todo.id);
    console.log(pm.getAll());
    localStorage.setItem("packageManager", JSON.stringify(pm));

  });

  let newInputText = document.createElement("input");
  newInputText.classList.add("todo-new-title");
  newInputText.value = todo.title;
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
  return todoDiv;
};
export default drawTodo;
