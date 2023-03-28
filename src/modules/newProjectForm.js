import loadProjects from "./loadProjects";
import Project from "./Project";
const createNewProjectForm = (projManDiv, pm, displayPanel) => {
 
  
  
 
  let nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.id = "form-project-name";
  let createButton = document.createElement("button");
  createButton.textContent = "Create";
  createButton.id="create-button";
  
  //create a false project div to append to.
  
  let falseProject = document.createElement('div');
  falseProject.id='input-placeholder';
  falseProject.innerHTML='<p class = "project-name" >new project</p>';
  falseProject.classList.add('project');
  falseProject.children[0].appendChild(nameInput);
  falseProject.children[0].appendChild(createButton);
  projManDiv.appendChild(falseProject);
 
  nameInput.focus();
  
 
    nameInput.addEventListener('keyup',({key})=>{
      if(key==="Enter"){
        nameInput.blur();
      }
    })
    
    createButton.addEventListener("click", () => {
      if(nameInput.value!=='')
      addToDOM();
       else
         newProjectFormDiv.remove();
    });
    nameInput.onblur=()=>{
      if(nameInput.value!=='')
      addToDOM();
       else
         newProjectFormDiv.remove();
    }
    
  
  
  
  const addToDOM = () => {
    
    let tempProjName = new Project(nameInput.value, pm.getAll().length);
    pm.addProj(tempProjName);
    loadProjects(pm, projManDiv, displayPanel);
    localStorage.setItem("packageManager", JSON.stringify(pm));
    
  }
};


export default createNewProjectForm;
