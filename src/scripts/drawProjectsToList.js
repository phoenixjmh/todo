import createNewTodoButton from "./newTodoButton";
import drawExistingTodos from "./drawExistingTodos";
import removeElement from "./removeElement";

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
  projectDiv.appendChild(projectTitleH1);
  projectDiv.appendChild(editButton);
  projectDiv.appendChild(removeButton);

  projManDiv.appendChild(projectDiv);
  return projectDiv;
};
export default drawProjectsToList;
