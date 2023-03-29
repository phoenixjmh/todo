/* eslint-disable no-underscore-dangle */
import ProjectManager from "./modules/ProjectManager";
import Todo from "./modules/Todo";
import Project from "./modules/Project";
import {
  drawProjectManager,
  drawProjectDisplayPanel,
} from "./modules/loadMain";
import "./main.scss";
import loadProjects from "./modules/loadProjects";
import saveWork from "./modules/Storage";

let savedProjects;
const pm = new ProjectManager();
if (localStorage.getItem("packageManager") != null) {
  savedProjects = JSON.parse(localStorage.getItem("packageManager")).projects;
  savedProjects.forEach((item) => {
    const proj = new Project(item._title, item._id, item._div);
    pm.addProj(proj);
    const { todos } = item;
    todos.forEach((todo) => {
      console.log(todo);
      const tempTodo = new Todo(todo._title, todo._dueDate, todo._id);
      proj.addTodo(tempTodo);
    });
  });
} else if (pm.getAll().length < 1) {
  const defaultProject = new Project("All", 0);
  pm.addProj(defaultProject);
}

const displayPanel = drawProjectDisplayPanel();
const projectManagerDiv = drawProjectManager(pm, displayPanel);

// Development set up stuff

loadProjects(pm, projectManagerDiv, displayPanel);
saveWork(pm);
