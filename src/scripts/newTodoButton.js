import createNewTodoForm from "./newTodoForm";

const createNewTodoButton=(project,displayPanel)=>{
    let createTodoFormButton = document.createElement('button');
    createTodoFormButton.classList.add('create-todo-form-button');
    createTodoFormButton.textContent='Create new Todo';
  
    createTodoFormButton.addEventListener('click',()=>{
      
       createNewTodoForm(project,displayPanel);
    })
    displayPanel.appendChild(createTodoFormButton);
    return createTodoFormButton;
  }
  export default createNewTodoButton;