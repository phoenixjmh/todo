 import drawProjectsToList from "./drawProjectsToList";
 const loadProjects=(projectManagerObject,projectManagerDiv,displayPanel)=> {
  //DEBUG
  console.log('Hello from loadProjects, its',displayPanel)
    projectManagerDiv.innerHTML='';
    const projArray = projectManagerObject.getAll();
    projArray.forEach((project) => {
      const tempDiv = drawProjectsToList(project,project.title, project.id,projectManagerDiv,displayPanel);
      project.div = tempDiv;
    });
  }
  export default loadProjects;