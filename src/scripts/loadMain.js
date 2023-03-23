import createNewProjectForm from "./newProjectForm";

const drawProjectManager=(pm,displayPanel)=> {
    let projectManagerDiv = document.createElement("div");
    projectManagerDiv.classList.add("project-manager");
    let createFormNewProject = document.createElement("button");
    createFormNewProject.classList.add("new-project-button");
    createFormNewProject.textContent = "Create A New Project";
    projectManagerDiv.appendChild(createFormNewProject);
    // document.body.appendChild(projectManagerDiv);
    const disPan = document.querySelector('.project-display-panel');
    const parentNode = document.body;
    parentNode.insertBefore(projectManagerDiv,disPan);
    createFormNewProject.addEventListener("click", () => {
      createNewProjectForm(projectManagerDiv,pm,displayPanel);                ///DEPEND
      console.log("button");
    });
  
    return projectManagerDiv;
  }

  const drawProjectDisplayPanel=()=> {
    let displayPanelDiv = document.createElement("div");
    displayPanelDiv.classList.add("project-display-panel");
    
    document.body.appendChild(displayPanelDiv);

    return displayPanelDiv;
  }
  export {drawProjectManager,drawProjectDisplayPanel}