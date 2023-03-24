// class ProjectManager {
//   projects = [];
//   addProj(project) {
//     this.projects.push(project);
//   }
//   getAll() {
//     return this.projects;
//   }
// }

// This is unbound, because I want it to work for all different Objects. As long as they have a getAll function, they will have a returned array that this will loop through.
// for now this must be supplied an ID, but we can have the DOM element contain the same ID, and when the remove button is clicked, the DOM element's id will be supplied here.

// function remove(object, id) {
//   let array = object.getAll();
//   for (let i in array) {
//     // if array item matches the id we're trying to remove
//     if (array[i].id == id) {
//       console.log(
//         "ID match, Time to add remove function",
//         "Object matched was named",
//         array[i].title
//       );

//       //Removes item with specified id from the Object's array.
//       //This does not effect the DOM, nor do i want it to. That will be handled in a seperate module, perhaps called from here, supplied with the id.
//       // removeDomElement(id).   However, this method seems redundant, because the Element is already being referenced by the click.

//       //just a quick note. the button will be clicked, which will contain an id that was assigned to that Todo DOM element. The  id will then be passed to this function, that will remove the correspondingArray element. Finally, that button will remove it's parent, the Todo DOM element.
//       array.splice(array[i], 1);
//     }
//   }
// }
// class Project {
//   todos = [];
//   constructor(title, id, div) {
//     this._title = title;
//     this._id = id;
//     this._div = div;
//   }
//   get title() {
//     return this._title;
//   }
//   set title(title) {
//     this._title = title;
//   }
//   get id() {
//     return this._id;
//   }
//   get div() {
//     return this._div;
//   }
//   set div(div) {
//     this._div = div;
//   }

//   // This must ALWAYS be called from an already existing, and inserted into ProjectManager project. Calling this on a variable will do nothing, except modify the object. That object was simply COPIED into the project manager, as it was when it was copied. To use this function, make sure to access that copy. save time don't be stupid.
//   addTodo(todo) {
//     this.todos.push(todo);
//   }
//   getAll() {
//     return this.todos;
//   }
// }

// class Todo {
//   constructor(Title, Description, dueDate, priority, id) {
//     this._title = Title;
//     this._description = Description;
//     this._dueDate = dueDate;
//     this._priority = priority;
//     this.id = id;
//   }
//   get title() {
//     return this._title;
//   }
//   get description(){return this._description};
//   get dueDate(){return this._dueDate};
//   get priority(){return this._priority};
//   get id(){return this._id};
//   set title(title){
//     this._title=title;
//   } 
//   set description(description){
//     this._description=description;
//   }
//   set dueDate(dueDate){
//     this._dueDate=dueDate;
//   }
//   set priority(priority){
//     this._priority=priority;
//   }
//   set id(id){
//     this._id=id;
//   }
// }

//Setup for design.
// let pm = new ProjectManager();
// let proj1 = new Project("Grocery", 0);
// let td1 = new Todo("Eggs", 0, 0, 0, 0);
// let td2 = new Todo("bacon", 0, 0, 0, 1);
// proj1.addTodo(td1);
// proj1.addTodo(td2);
// pm.addProj(proj1);
// let proj2 = new Project("Hardware", 1);
// let td3 = new Todo("Nails", 0, 0, 0, 0);
// let td4 = new Todo("Screws", 0, 0, 0, 1);
// proj2.addTodo(td3);
// proj2.addTodo(td4);
// pm.addProj(proj2);
// pm.getAll();
/////////////////////////////////////////////////////////////

// creates a form element in the DOM, for entering information to create
// the new title.
// also handles logic for when the create button is pressed.
// the projManDiv argument is trying to circumvent the neccesity of a global var

// function createNewProjectForm(projManDiv) {
//   let newProjectFormDiv = document.createElement("div");
//   newProjectFormDiv.classList.add("create-project-form");

//   let newProjectForm = document.createElement("form");
//   let nameLabel = document.createElement("label");
//   nameLabel.setAttribute("for", "form-project-name");
//   nameLabel.textContent = "Project Name";

//   let nameInput = document.createElement("input");
//   nameInput.setAttribute("type", "text");
//   nameInput.id = "form-project-name";

//   let createButton = document.createElement("button");
//   createButton.textContent = "Create";
//   createButton.classList.add("form-button");

//   newProjectForm.appendChild(nameLabel);
//   newProjectForm.appendChild(nameInput);
//   newProjectFormDiv.appendChild(newProjectForm);
//   newProjectFormDiv.appendChild(createButton);
//   document.body.appendChild(newProjectFormDiv);

//   // When the create button is clicked, a DIV is created, with a
//   // newly created project as it's ID/Title assigner.
//   createButton.addEventListener("click", () => {
//     newProjectFormDiv.remove();
//     let tempProjName = new Project(nameInput.value, pm.getAll().length);
//     pm.addProj(tempProjName);
//     drawProjectDivOverLoad(tempProjName, projManDiv);
//   });
// }
// this._title = Title;
// this._description = Description;
// this._dueDate = dueDate;
// this._priority = priority;
// this.id = id;






// function drawProjectsOnLoad(packageManager, projManDiv) {
//   const projArray = packageManager.getAll();
//   projArray.forEach((project) => {
//     const tempDiv = drawProjectDiv(project,project.title, project.id, projManDiv);
//     project.div = tempDiv;
//   });
// }
//Creates the DOM element with an ID and Text content From the project array
// within the ProjectManager class.

// function drawExistingProjectToList(project,title, id, projManDiv) {
//   let projectDiv = document.createElement("div");
//   projectDiv.classList.add("project");
//   projectDiv.id = 'project-'+id;
//   let projectTitleH1 = document.createElement("h1");
//   projectTitleH1.classList.add("project-name");
//   projectTitleH1.textContent = title;


//   //When project title is clicked, The display panel is cleared
//   // and repopulated with it's corresponding Todos.
//   projectDiv.addEventListener("click", function () {
//     displayPanel.innerHTML='';
//     let newFormButton = createNewTodoButton(project,displayPanel);

//     drawTodosOnLoad(project,displayPanel);

//   });
//   projectDiv.appendChild(projectTitleH1);

//   projManDiv.appendChild(projectDiv);
//   return projectDiv;
// }


// This is the same function, but it takes the actual project as an argument,
// and I guess JS doesn't support overloading, probably because of the way
// the  code executes
// function drawProjectDivOverLoad(project, projManDiv) {
    
//     let projectDiv = document.createElement("div");
//     projectDiv.classList.add("project");
//     projectDiv.id = project.id;
//     let projectTitleH1 = document.createElement("h1");
//     projectTitleH1.classList.add("project-name");
//     projectTitleH1.textContent = project.title;
//     projectDiv.appendChild(projectTitleH1);
  
//     projManDiv.appendChild(projectDiv);
//     project.div = projectDiv;
  
//     projectDiv.addEventListener("click", function () {
//       displayPanel.innerHTML='';
//       drawTodosOnLoad(project,displayPanel);
//       let newFormButton = createNewTodoButton(project,displayPanel);
  
      
//     });
//     return projectDiv;
//   }

// function drawTodosOnLoad(project,displayPanel){
//     const todoArray=project.getAll();
//     todoArray.forEach( (todo)=>{
//         //Maybe assign the project to which it resides right here.

//         const tempTodoDiv = drawTodoDiv(todo.title,todo.description,todo.dueDate,todo.priority,todo.id,displayPanel,project)
//     })
}
// function drawTodoDiv(title,description,dueDate,priority,id,displayPanel,project){
//     let todoDiv = document.createElement("div");
//     todoDiv.classList.add("todo");
//     todoDiv.id = 'todo-'+id;
//     let todoTitleH4 = document.createElement("h4");
//     todoTitleH4.classList.add("title");
//     todoTitleH4.textContent = title;
//     let todoDescH4 = document.createElement("h4");
//     todoDescH4.classList.add("description");
//     todoDescH4.textContent = description;
//     let todoDueDateH4 = document.createElement("h4");
//     todoDueDateH4.classList.add("due-date");
//     todoDueDateH4.textContent = dueDate;
//     let removeButton = document.createElement("button");
//     removeButton.classList.add("remove-todo");
//     removeButton.textContent = "Remove";
//     todoDiv.appendChild(todoTitleH4);
//     todoDiv.appendChild(todoDescH4);
//     todoDiv.appendChild(todoDueDateH4);
//     todoDiv.appendChild(removeButton);
//     displayPanel.appendChild(todoDiv);
//     removeButton.addEventListener('click',()=>{
//       remove(project,id);
//       todoDiv.remove();
//     })
//     return todoDiv;
  
    
// }
// This is the same function, but it needs a reference to the current project, last accessed by:
// function drawTodoDivOverload(todo, displayPanel,project) {
//   let todoDiv = document.createElement("div");
//   todoDiv.classList.add("todo");
//   todoDiv.id = "todo-" + todo.id;
//   let todoTitleH4 = document.createElement("h4");
//   todoTitleH4.classList.add("title");
//   todoTitleH4.textContent = todo.title;
//   let todoDescH4 = document.createElement("h4");
//   todoDescH4.classList.add("description");
//   todoDescH4.textContent = todo.description;
//   let todoDueDateH4 = document.createElement("h4");
//   todoDueDateH4.classList.add("due-date");
//   todoDueDateH4.textContent = todo.dueDate;
//   let removeButton = document.createElement("button");
//   removeButton.classList.add("remove-todo");
//   removeButton.textContent = "Remove";
//   todoDiv.appendChild(todoTitleH4);
//   todoDiv.appendChild(todoDescH4);
//   todoDiv.appendChild(todoDueDateH4);
//   todoDiv.appendChild(removeButton);
//   displayPanel.appendChild(todoDiv);
//   removeButton.addEventListener('click',()=>{
//     remove(project,todo.id);
//     todoDiv.remove();
//   })

//   return todoDiv;
// }

// function createNewTodoForm(project) {
//   let newTodoFormDiv = document.createElement("div");
//   newTodoFormDiv.classList.add("create-todo-form");

//   let newTodoForm = document.createElement("form");
//   let titleLabel = document.createElement("label");
//   titleLabel.setAttribute("for", "form-todo-title");
//   titleLabel.textContent = "Title";

//   let titleInput = document.createElement("input");
//   titleInput.setAttribute("type", "text");
//   titleInput.id = "form-Todo-title";

//   let descriptionLabel = document.createElement("label");
//   descriptionLabel.setAttribute("for", "form-todo-description");
//   descriptionLabel.textContent = "Description";

//   let descriptionInput = document.createElement("input");
//   descriptionInput.setAttribute("type", "text");
//   descriptionInput.id = "form-todo-description";

//   let dueDateLabel = document.createElement("label");
//   dueDateLabel.setAttribute("for", "form-todo-dueDate");
//   dueDateLabel.textContent = "Due Date";

//   let dueDateInput = document.createElement("input");
//   dueDateInput.setAttribute("type", "text");
//   dueDateInput.id = "form-todo-dueDate";

//   let priorityLabel = document.createElement("label");
//   priorityLabel.setAttribute("for", "form-todo-priority");
//   priorityLabel.textContent = "Priority";

//   let priorityInput = document.createElement("input");
//   priorityInput.setAttribute("type", "text");
//   priorityInput.id = "form-todo-priority";

//   let createButton = document.createElement("button");
//   createButton.textContent = "Create";
//   createButton.classList.add("form-button-todo");

//   newTodoForm.appendChild(titleLabel);
//   newTodoForm.appendChild(titleInput);
//   newTodoForm.appendChild(descriptionLabel);
//   newTodoForm.appendChild(descriptionInput);
//   newTodoForm.appendChild(dueDateLabel);
//   newTodoForm.appendChild(dueDateInput);

//   newTodoFormDiv.appendChild(newTodoForm);
//   newTodoFormDiv.appendChild(createButton);
//   document.body.appendChild(newTodoFormDiv);

//   // When the create button is clicked, a DIV is created, with a
//   // newly created Todo as it's ID/Title assigner.

//   createButton.addEventListener("click", () => {

//     let tempTodoName = new Todo(titleInput.value,descriptionInput.value,dueDateInput.value,priorityInput.value,project.getAll().length);
//     project.addTodo(tempTodoName);
//     newTodoFormDiv.remove();
//     drawTodoDivOverload(tempTodoName, displayPanel,project);
//     console.log(tempTodoName.id);
//   });
// }










//Creates the side panel that stores the names of the projects
// and the click logic to navigate to that project.

// function drawProjectManager() {
//   let projectManagerDiv = document.createElement("div");
//   projectManagerDiv.classList.add("project-manager");
//   let createFormNewProject = document.createElement("button");
//   createFormNewProject.classList.add("new-project-button");
//   createFormNewProject.textContent = "Create A New Project";
//   projectManagerDiv.appendChild(createFormNewProject);
//   document.body.appendChild(projectManagerDiv);
//   createFormNewProject.addEventListener("click", () => {
//     createNewProjectForm(projectManagerDiv);
//     console.log("button");
//   });

//   return projectManagerDiv;
// }
// function createNewTodoButton(project,displayPanel){
//   let createTodoFormButton = document.createElement('button');
//   createTodoFormButton.classList.add('create-todo-form-button');
//   createTodoFormButton.textContent='Create new Todo';

//   createTodoFormButton.addEventListener('click',()=>{
    
//      createNewTodoForm(project);
//   })
//   displayPanel.appendChild(createTodoFormButton);
//   return createTodoFormButton;
// }

// function drawProjectDisplayPanel() {
//   let displayPanelDiv = document.createElement("div");
//   displayPanelDiv.classList.add("project-display-panel");
  
//   document.body.appendChild(displayPanelDiv);
//   return displayPanelDiv;
// }
let projectManagerDiv = drawProjectManager();
drawProjectsOnLoad(pm, projectManagerDiv);

let displayPanel = drawProjectDisplayPanel();

//Dom Functions down here for now.
