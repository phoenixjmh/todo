import drawProjectsToList from "./drawProjectsToList";
const loadProjects = (
  projectManagerObject,
  projectManagerDiv,
  displayPanel
) => {
  projectManagerDiv.innerHTML = "";
  console.log("hello from loadProjects",projectManagerObject.projects)
  const projArray = projectManagerObject.projects;
  console.log('copied array',projArray);
  projArray.forEach((project) => {
    const tempDiv = drawProjectsToList(
      projectManagerObject,
      project,
      project.title,
      project.id,
      projectManagerDiv,
      displayPanel
    );
    console.log("Named",project.title);
    project.div = tempDiv;
    localStorage.setItem('packageManager',JSON.stringify(projectManagerObject));
  });
};
export default loadProjects;
