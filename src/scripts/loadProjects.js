import drawProjectsToList from "./drawProjectsToList";
const loadProjects = (
  projectManagerObject,
  projectManagerDiv,
  displayPanel
) => {
  projectManagerDiv.innerHTML = "";
  const projArray = projectManagerObject.projects;
  projArray.forEach((project) => {
    const tempDiv = drawProjectsToList(
      projectManagerObject,
      project,
      project.title,
      project.id,
      projectManagerDiv,
      displayPanel
    );
    project.div = tempDiv;
    localStorage.setItem('packageManager',JSON.stringify(projectManagerObject));
  });
};
export default loadProjects;
