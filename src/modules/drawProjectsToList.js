import createNewTodoButton from "./newTodoButton";
import drawExistingTodos from "./drawExistingTodos";
import removeElement from "./removeElement";
import Todo from "./Todo";
import drawAllTodos from "./drawAllTodos";
import saveWork from "./Storage";

const drawProjectsToList = (
  pm,
  project,
  title,
  id,
  projManDiv,
  displayPanel
) => {
  const navTitle=document.querySelector('#nav-title');
  const sidePanel = projManDiv.parentElement;
  const expandArrow=document.querySelector('#expand-arrow');
  expandArrow.onclick = ()=>{
      displayPanel.parentElement.classList.remove('expand-panel');
      sidePanel.classList.remove('display-open');
      displayPanel.parentElement.classList.add('close-panel');
      sidePanel.classList.add('display-closed');
  }
  if(project.title!=="All")
  {

    let projectDiv = document.createElement("div");
    let editButton = document.createElement("button");
    

    editButton.classList.add("edit-project");
    
    let editIcon=document.createElement('img');
    editIcon.classList.add('edit-icon');
    editButton.appendChild(editIcon);
    projectDiv.classList.add("project");
    projectDiv.id = "project-" + id;
    let projectTitle = document.createElement("p");
    projectTitle.classList.add("project-name");
    projectTitle.textContent = project.title;
    let newNameInput = document.createElement("input");
    newNameInput.id = "new-name-input";
    newNameInput.value = project.title;
    let removeButton=document.createElement('button');
    removeButton.classList.add('project-remove-button');
    removeButton.textContent='X';
  
    projectDiv.appendChild(projectTitle);
    let buttonPanel = document.createElement('div');
    buttonPanel.classList.add('button-panel');
    buttonPanel.appendChild(editButton);
    buttonPanel.appendChild(removeButton);
    projectDiv.appendChild(buttonPanel);
    
    
    projManDiv.appendChild(projectDiv);
  
    
    
      projectDiv.addEventListener('drop',(event)=>moveTodo(event,project,pm));

      removeButton.onclick = () => {
     removeElement(pm, project.id);
     saveWork(pm);
  
     projectDiv.remove();
   };
  
   editButton.onclick= () => {
     projectTitle.remove();
     projectDiv.appendChild(newNameInput);
     newNameInput.focus();
   };
  
   newNameInput.onblur = () => {
     projectTitle.textContent = newNameInput.value;
     project.title = newNameInput.value;
     newNameInput.remove();
     projectDiv.insertBefore(projectTitle, buttonPanel);
     saveWork(pm);
   };
   newNameInput.onkeyup= ({ key }) => {
     if (key === "Enter") newNameInput.blur();
   };
  
   projectDiv.addEventListener('click',function (event){
    if(event.target===this||event.target===projectTitle){

      if(displayPanel.parentElement.classList.contains('close-panel')){
        displayPanel.parentElement.classList.remove('close-panel');
        sidePanel.classList.remove('display-closed');
      }
      displayPanel.parentElement.classList.add('expand-panel');
      sidePanel.classList.add('display-open');
       displayPanel.innerHTML = "";
       1;
       
       navTitle.textContent=project.title;
       drawExistingTodos(pm, project, displayPanel);
       let newFormButton = createNewTodoButton(pm, project, displayPanel);
    }
   });
   projectDiv.addEventListener("dragover", (event) => {
     event.preventDefault();
   });
  }

else
{
  let projectDiv = document.createElement("div");
  projectDiv.classList.add("project");
  projectDiv.id = 'all-projects-container';
  let projectTitle = document.createElement("p");
  projectTitle.classList.add("project-name");
  projectTitle.textContent = project.title;
  projectDiv.appendChild(projectTitle);
  projManDiv.appendChild(projectDiv);
  projectDiv.onclick=()=> {
    if(displayPanel.parentElement.classList.contains('close-panel')){
      displayPanel.parentElement.classList.remove('close-panel');
      sidePanel.classList.remove('display-closed');
    }
    displayPanel.parentElement.classList.add('expand-panel');
    sidePanel.classList.add('display-open');
    displayPanel.innerHTML = "";
    navTitle.textContent=project.title;
    drawAllTodos(pm,displayPanel);
    let newFormButton = createNewTodoButton(pm, project, displayPanel);
  };
  
};

const moveTodo=(event,project,pm)=>{
   event.preventDefault();
   const todoToAdd = JSON.parse(event.dataTransfer.getData("text")).todoObj;
   const sourceProject = JSON.parse(
     event.dataTransfer.getData("text")
   ).projectObj;
   const todo = new Todo(
     todoToAdd._title,
     todoToAdd._description,
     todoToAdd._dueDate,
     " ",
     todoToAdd._id
   );
   project.addTodo(todo);
   let arr = pm.getAll();
   for (let p in arr) {
     if (arr[p].id == sourceProject._id) {
       let projRef = arr[p];
       removeElement(projRef, todo.id);
     }
   }
   saveWork(pm);

}
}
export default drawProjectsToList;
