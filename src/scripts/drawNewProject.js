import drawExistingTodos from "./drawExistingTodos";
import createNewTodoButton from "./newTodoButton";

const drawExistingProject=(project, projManDiv,displayPanel)=> {
    
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.id = project.id;
    let projectTitleH1 = document.createElement("h1");
    projectTitleH1.classList.add("project-name");
    projectTitleH1.textContent = project.title;
    projectDiv.appendChild(projectTitleH1);
  
    projManDiv.appendChild(projectDiv);
    project.div = projectDiv;
  
    projectDiv.addEventListener("click", function () {
      displayPanel.innerHTML='';
      drawExistingTodos(project,displayPanel);
      let newFormButton = createNewTodoButton(project,displayPanel);
  
      
    });
    return projectDiv;
  }
  export default drawExistingProject;