import createNewProjectForm from "./newProjectForm";

const drawProjectManager=(pm,displayPanel)=> {
    let projectManagerDiv = document.createElement("div");
    projectManagerDiv.classList.add("project-manager");
    let createFormNewProject = document.createElement("button");
    createFormNewProject.classList.add("new-project-button");
    createFormNewProject.textContent = "Create A New Project";
    projectManagerDiv.appendChild(createFormNewProject);
    // document.body.appendChild(projectManagerDiv);
    let mainPanel = document.querySelector('.main-panel');
    const parentNode = document.body;
    parentNode.insertBefore(projectManagerDiv,mainPanel);
    createFormNewProject.addEventListener("click", () => {
      createNewProjectForm(projectManagerDiv,pm,displayPanel);                ///DEPEND
      console.log("button");
    });
  
    return projectManagerDiv;
  }

  const drawProjectDisplayPanel=()=> {
    let mainPanel=document.createElement('div');
    mainPanel.classList.add('main-panel');
    let displayPanelDiv = document.createElement("div");
    displayPanelDiv.classList.add("project-display-panel");
    mainPanel.appendChild(displayPanelDiv);
    document.body.appendChild(mainPanel);

    return displayPanelDiv;
  }
  export {drawProjectManager,drawProjectDisplayPanel}