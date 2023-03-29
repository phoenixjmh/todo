import drawProjectsToList from "./drawProjectsToList";
import saveWork from "./Storage";
const loadProjects = (
  pm,
  projectManagerDiv,
  displayPanel
) => {
  projectManagerDiv.innerHTML = "";
  const projArray = pm.projects;
  projArray.forEach((project) => {
    const tempDiv = drawProjectsToList(
      pm,
      project,
      project.title,
      project.id,
      projectManagerDiv,
      displayPanel
    );
    project.div = tempDiv;
    saveWork(pm);
  });
};
export default loadProjects;
