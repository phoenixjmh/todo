/* eslint-disable no-use-before-define */
import loadProjects from "./loadProjects";
import Project from "./Project";
import saveWork from "./Storage";

const createNewProjectForm = (projManDiv, pm, displayPanel) => {
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.id = "form-project-name";
  const createButton = document.createElement("button");
  createButton.textContent = "+ Add";
  createButton.id = "create-button";

  const falseProject = document.createElement("div");
  falseProject.id = "input-placeholder";

  falseProject.classList.add("project");
  falseProject.appendChild(nameInput);
  falseProject.appendChild(createButton);
  projManDiv.appendChild(falseProject);

  nameInput.focus();

  nameInput.onkeyup = ({ key }) => {
    if (key === "Enter") {
      nameInput.blur();
    }
  };

  createButton.onclick = () => {
    if (nameInput.value !== "") addToDOM();
    else falseProject.remove();
  };
  nameInput.onblur = () => {
    if (nameInput.value !== "") addToDOM();
    else falseProject.remove();
  };

  const addToDOM = () => {
    const tempProjName = new Project(nameInput.value, pm.getAll().length);
    pm.addProj(tempProjName);
    loadProjects(pm, projManDiv, displayPanel);
    saveWork(pm);
  };
};

export default createNewProjectForm;
