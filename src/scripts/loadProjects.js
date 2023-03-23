 import drawExistingProjectToList from "./drawExistingProjectsToList";
 const drawProjectsOnLoad=(projectManagerObject,projectManagerDiv,displayPanel)=> {
  //DEBUG
  console.log('Hello from drawProjectsOnLoad, its',displayPanel)

    const projArray = projectManagerObject.getAll();
    projArray.forEach((project) => {
      const tempDiv = drawExistingProjectToList(project,project.title, project.id,projectManagerDiv,displayPanel);
      project.div = tempDiv;
    });
  }
  export default drawProjectsOnLoad;