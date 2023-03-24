import createNewTodoButton from "./newTodoButton";
import drawExistingTodos from "./drawExistingTodos";
import removeElement from "./removeElement";
import Todo from "./Todo";

const drawProjectsToList = (
  pm,
  project,
  title,
  id,
  projManDiv,
  displayPanel
) => {
  let projectDiv = document.createElement("div");
  let editButton = document.createElement("button");
  editButton.classList.add("edit-project");
  editButton.textContent = "rename";
  projectDiv.classList.add("project");
  projectDiv.id = "project-" + id;
  let projectTitleH1 = document.createElement("h1");
  projectTitleH1.classList.add("project-name");
  projectTitleH1.textContent = project.title;
  let newNameInput = document.createElement("input");
  newNameInput.id = "new-name-input";
  newNameInput.value = project.title;
  let removeButton=document.createElement('button');
  removeButton.classList.add('.project-remove-button');
  removeButton.textContent='X';

  removeButton.addEventListener('click',()=>{
    removeElement(pm,project.id);
    localStorage.setItem("packageManager", JSON.stringify(pm));

    console.log("after remove",pm);
    projectDiv.remove();
    
  })

  editButton.addEventListener("click", () => {
    projectTitleH1.remove();
    projectDiv.appendChild(newNameInput);
  });
  // if(document.activeElement===newNameInput){
  newNameInput.onblur = () => {
    projectTitleH1.textContent = newNameInput.value;
    project.title = newNameInput.value;
    newNameInput.remove();
    projectDiv.insertBefore(projectTitleH1, editButton);
    localStorage.setItem("packageManager", JSON.stringify(pm));
  };
  newNameInput.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") newNameInput.blur();
  });

  projectTitleH1.addEventListener("click", function () {
    displayPanel.innerHTML = "";
    1;
    drawExistingTodos(pm, project, displayPanel);
    let newFormButton = createNewTodoButton(pm,project, displayPanel);
  });
  projectDiv.addEventListener('dragover',(event)=>{
    event.preventDefault();
  });
  projectDiv.addEventListener('drop',(event)=>{
    event.preventDefault();
    console.log('Drop on',project.title);
    const todoToAdd=JSON.parse(event.dataTransfer.getData("text")).todoObj;
    const sourceProject=JSON.parse(event.dataTransfer.getData('text')).projectObj;
    console.log('Adding',todoToAdd,"to",project.title,'from',sourceProject);
    const todo = new Todo(todoToAdd._title,todoToAdd._description,todoToAdd._dueDate," ",todoToAdd._id);
    project.addTodo(todo);
    console.log(todoToAdd._id, "unparsed id");
    console.log('referenced todo',todo);
    let arr=pm.getAll();
    for (let p in arr){
      if(arr[p].id==sourceProject._id){
        let projRef=arr[p];
        removeElement(projRef,todo.id);
        console.log("removeElement args",projRef,todo.id);
      }
    }
    localStorage.setItem('packageManager',JSON.stringify(pm));
  });
  projectDiv.appendChild(projectTitleH1);
  projectDiv.appendChild(editButton);
  projectDiv.appendChild(removeButton);

  projManDiv.appendChild(projectDiv);
  return projectDiv;
};
export default drawProjectsToList;