import createNewTodoButton from "./newTodoButton";
import drawExistingTodos from "./drawExistingTodos";

const  drawProjectsToList=(project,title, id, projManDiv,displayPanel)=> {
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.id = 'project-'+id;
    let projectTitleH1 = document.createElement("h1");
    projectTitleH1.classList.add("project-name");
    projectTitleH1.textContent = title;
  
      console.log('Hello from drawExistingProjects to list its',displayPanel);
  
    //When project title is clicked, The display panel is cleared
    // and repopulated with it's corresponding Todos.
    projectDiv.addEventListener("click", function () {
      displayPanel.innerHTML='';
      drawExistingTodos(project,displayPanel);
      let newFormButton = createNewTodoButton(project,displayPanel);
  
    });
    projectDiv.appendChild(projectTitleH1);
  
    projManDiv.appendChild(projectDiv);
    return projectDiv;
  }
  export default drawProjectsToList;