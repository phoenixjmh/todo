import createNewProjectForm from "./newProjectForm";

const drawProjectManager = (pm, displayPanel) => {
  const sidePanel = document.createElement("div");
  sidePanel.classList.add("side-panel");
  const projectPanelTitle = document.createElement("div");
  projectPanelTitle.classList.add("projman-header");
  projectPanelTitle.innerHTML =
    "<h2 id = panel-title>Todo-App</h2> <p id ='projman-label'>Projects</p>";
  const projectManagerDiv = document.createElement("div");
  projectManagerDiv.classList.add("project-manager");
  const newProjectButton = document.createElement("button");
  newProjectButton.classList.add("new-project-button");
  newProjectButton.textContent = "+ Add Project";
  const mainPanel = document.querySelector(".main-panel");
  const parentNode = document.body;
  sidePanel.appendChild(projectPanelTitle);
  sidePanel.appendChild(projectManagerDiv);
  sidePanel.appendChild(newProjectButton);
  parentNode.insertBefore(sidePanel, mainPanel);
  newProjectButton.addEventListener("click", () => {
    createNewProjectForm(projectManagerDiv, pm, displayPanel);
  });

  return projectManagerDiv;
};

const drawProjectDisplayPanel = () => {
  const mainPanel = document.createElement("div");
  mainPanel.classList.add("main-panel");
  const navBar = document.createElement("div");
  navBar.id = "nav-bar";
  const expandArrow = document.createElement("div");
  expandArrow.id = "expand-arrow";
  const displayPanelDiv = document.createElement("div");
  displayPanelDiv.classList.add("project-display-panel");
  const projectTitle = document.createElement("p");
  projectTitle.textContent = "Project Title";
  projectTitle.id = "nav-title";

  navBar.appendChild(expandArrow);
  navBar.appendChild(projectTitle);
  mainPanel.appendChild(navBar);
  mainPanel.appendChild(displayPanelDiv);
  document.body.appendChild(mainPanel);

  return displayPanelDiv;
};
export { drawProjectManager, drawProjectDisplayPanel };
