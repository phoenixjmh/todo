import drawExistingTodos from "./drawExistingTodos";


import Todo from "./Todo";
const createNewTodoForm=(project,displayPanel)=> {
    let newTodoFormDiv = document.createElement("div");
    newTodoFormDiv.classList.add("create-todo-form");
  
    let newTodoForm = document.createElement("form");
    let titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "form-todo-title");
    titleLabel.textContent = "Title";
  
    let titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.id = "form-Todo-title";
  
    // let descriptionLabel = document.createElement("label");
    // descriptionLabel.setAttribute("for", "form-todo-description");
    // descriptionLabel.textContent = "Description";
  
    // let descriptionInput = document.createElement("input");
    // descriptionInput.setAttribute("type", "text");
    // descriptionInput.id = "form-todo-description";
  
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
    //newTodoForm.appendChild(descriptionLabel);
    // newTodoForm.appendChild(descriptionInput);
    newTodoForm.appendChild(dueDateLabel);
    newTodoForm.appendChild(dueDateInput);
  
    newTodoFormDiv.appendChild(newTodoForm);
    newTodoFormDiv.appendChild(createButton);
    document.body.appendChild(newTodoFormDiv);
  
    // When the create button is clicked, a DIV is created, with a
    // newly created Todo as it's ID/Title assigner.
  
    createButton.addEventListener("click", () => {
  
      let tempTodoName = new Todo(titleInput.value,' ',dueDateInput.value,priorityInput.value,project.getAll().length);
      project.addTodo(tempTodoName);
      newTodoFormDiv.remove();
      drawExistingTodos(project,displayPanel);
      
    });
  }
  export default createNewTodoForm;
  