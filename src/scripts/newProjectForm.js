import drawExistingProject from "./drawNewProject";
import Project from "./Project";
const createNewProjectForm=(projManDiv,pm,displayPanel)=>{
    let newProjectFormDiv = document.createElement("div");
    newProjectFormDiv.classList.add("create-project-form");
  
    let newProjectForm = document.createElement("form");
    let nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "form-project-name");
    nameLabel.textContent = "Project Name";
  
    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.id = "form-project-name";
  
    let createButton = document.createElement("button");
    createButton.textContent = "Create";
    createButton.classList.add("form-button");
  
    newProjectForm.appendChild(nameLabel);
    newProjectForm.appendChild(nameInput);
    newProjectFormDiv.appendChild(newProjectForm);
    newProjectFormDiv.appendChild(createButton);
    document.body.appendChild(newProjectFormDiv);
  
    // When the create button is clicked, a DIV is created, with a
    // newly created project as it's ID/Title assigner.
    createButton.addEventListener("click", () => {
      newProjectFormDiv.remove();
      let tempProjName = new Project(nameInput.value, pm.getAll().length);
      pm.addProj(tempProjName);
      drawExistingProject(tempProjName, projManDiv,displayPanel);
    });
  }
  export default createNewProjectForm;