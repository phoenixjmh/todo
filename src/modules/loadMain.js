import createNewProjectForm from "./newProjectForm";

const drawProjectManager = (pm, displayPanel) => {
 
  

  let sidePanel = document.createElement("div");
  sidePanel.classList.add("side-panel");
  let projectPanelTitle = document.createElement('div');
  projectPanelTitle.innerHTML="<h2 id = panel-title>Projects</h2>"
  let projectManagerDiv = document.createElement("div");
  projectManagerDiv.classList.add("project-manager");
  let createFormNewProject = document.createElement("button");
  createFormNewProject.classList.add("new-project-button");
  createFormNewProject.textContent = "+ Add Project";
  // document.body.appendChild(projectManagerDiv);
  let mainPanel = document.querySelector(".main-panel");
  const parentNode = document.body;
  sidePanel.appendChild(projectPanelTitle);
  sidePanel.appendChild(projectManagerDiv);
  sidePanel.appendChild(createFormNewProject);
  parentNode.insertBefore(sidePanel, mainPanel);
  createFormNewProject.addEventListener("click", () => {
    createNewProjectForm(projectManagerDiv, pm, displayPanel); ///DEPEND
  });

  return projectManagerDiv;
};

const drawProjectDisplayPanel = () => {
  let mainPanel = document.createElement("div");
  mainPanel.classList.add("main-panel");
  let navBar=document.createElement('div');
  navBar.id='nav-bar';
  let expandArrow=document.createElement('div');
  expandArrow.id='expand-arrow';
  expandArrow.textContent='<';
  let displayPanelDiv = document.createElement("div");
  displayPanelDiv.classList.add("project-display-panel");
  let projectTitle = document.createElement('p');
  projectTitle.textContent='Project Title';
  projectTitle.id='nav-title';
  navBar.appendChild(expandArrow);
  navBar.appendChild(projectTitle);
  mainPanel.appendChild(navBar);
  mainPanel.appendChild(displayPanelDiv);
  document.body.appendChild(mainPanel);

  return displayPanelDiv;
};
export { drawProjectManager, drawProjectDisplayPanel };
