import removeElement from "./removeElement";

const drawExistingTodo=(title,description,dueDate,priority,id,displayPanel,project)=>{
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    todoDiv.id = 'todo-'+id;
    let todoTitleH4 = document.createElement("h4");
    todoTitleH4.classList.add("title");
    todoTitleH4.textContent = title;
    let todoDescH4 = document.createElement("h4");
    todoDescH4.classList.add("description");
    todoDescH4.textContent = description;
    let todoDueDateH4 = document.createElement("h4");
    todoDueDateH4.classList.add("due-date");
    todoDueDateH4.textContent = dueDate;
    let removeButton = document.createElement("button");
    removeButton.classList.add("remove-todo");
    removeButton.textContent = "Remove";
    todoDiv.appendChild(todoTitleH4);
    todoDiv.appendChild(todoDescH4);
    todoDiv.appendChild(todoDueDateH4);
    todoDiv.appendChild(removeButton);
    displayPanel.appendChild(todoDiv);
    removeButton.addEventListener('click',()=>{
      removeElement(project,id);
      todoDiv.remove();
    })
    return todoDiv;
  
    
}
export default drawExistingTodo;