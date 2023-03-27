import loadProjects from "./loadProjects";
import Project from "./Project";
const createNewProjectForm = (projManDiv, pm, displayPanel) => {
  let newProjectFormDiv = document.createElement("div");
  newProjectFormDiv.classList.add("create-project-form");
  let newProjectForm = document.createElement("form");
  let nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "form-project-name");
  nameLabel.textContent = "Project Name";
  let nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.id = "form-project-name";
  nameInput.focus();
  let createButton = document.createElement("button");
  createButton.textContent = "Create";
  createButton.classList.add("form-button");
  newProjectForm.appendChild(nameLabel);
  newProjectForm.appendChild(nameInput);
  newProjectFormDiv.appendChild(newProjectForm);
  newProjectFormDiv.appendChild(createButton);
  document.body.appendChild(newProjectFormDiv);
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
  newProjectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if(nameInput.value!=='')
   addToDOM();
    else
      newProjectFormDiv.remove();


  })
  const addToDOM = () => {
    newProjectFormDiv.remove();
    let tempProjName = new Project(nameInput.value, pm.getAll().length);
    pm.addProj(tempProjName);
    loadProjects(pm, projManDiv, displayPanel);
    localStorage.setItem("packageManager", JSON.stringify(pm));

  }
};


export default createNewProjectForm;
