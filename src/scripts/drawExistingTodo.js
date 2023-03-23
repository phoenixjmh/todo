import removeElement from "./removeElement";

const drawExistingTodo=(todo,displayPanel,project,pm)=>{
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    todoDiv.id = 'todo-'+todo.id;
    todoDiv.setAttribute('draggable','true');
    let todoCheckbox=document.createElement('input');
    
    todoCheckbox.setAttribute('type','checkbox');
    todoCheckbox.classList.add('todo-checkbox');
    let todoTitle = document.createElement("p");
    todoTitle.classList.add("title");
    todoTitle.textContent = todo.title;
    let todoDescH4 = document.createElement("h4");
    todoDescH4.classList.add("description");
    todoDescH4.textContent = todo.description;
    let todoDueDateH4 = document.createElement("h4");
    todoDueDateH4.classList.add("due-date");
    todoDueDateH4.textContent = todo.dueDate;
    let removeButton = document.createElement("button");
    removeButton.classList.add("remove-todo");
    removeButton.textContent = "Remove";
    todoDiv.appendChild(todoCheckbox);
    todoDiv.appendChild(todoTitle);
    //todoDiv.appendChild(todoDescH4);
    todoDiv.appendChild(todoDueDateH4);
    todoDiv.appendChild(removeButton);
    displayPanel.appendChild(todoDiv);
    removeButton.addEventListener('click',()=>{
      removeElement(project,todo.id);
      todoDiv.remove();
      console.log(todo.id);
      console.log(pm.getAll());
    });

    let newInputText = document.createElement('input');
    newInputText.classList.add('todo-new-title');
    newInputText.value=todo.title;
    todoTitle.addEventListener('click',()=>{
      
      todoTitle.appendChild(newInputText);
      newInputText.focus();

    })
    newInputText.onblur=()=>{
      todo.title = newInputText.value;
      todoTitle.textContent = todo.title;
      newInputText.remove();
    };
    newInputText.addEventListener('keyup',({key})=>{
      if(key==='Enter'){
        newInputText.blur();
      }
    })
    return todoDiv;
  
    
}
export default drawExistingTodo;