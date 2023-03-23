import ProjectManager from "./scripts/ProjectManager";
import Todo from "./scripts/Todo";
import Project from "./scripts/Project";
import {
  drawProjectManager,
  drawProjectDisplayPanel,
} from "./scripts/loadMain";
import drawProjectsOnLoad from "./scripts/loadProjects";
import "./style.scss";
import loadProjects from "./scripts/loadProjects";
let pm = new ProjectManager();

const displayPanel = drawProjectDisplayPanel();
const projectManagerDiv = drawProjectManager(pm, displayPanel);
const mainPanel = document.querySelector(".main-panel");

//Development set up stuff

let proj1 = new Project("Grocery", 0);
let td1 = new Todo("Eggs", 0, 0, 0, 0);
let td2 = new Todo("bacon", 0, 0, 0, 1);
proj1.addTodo(td1);
proj1.addTodo(td2);
pm.addProj(proj1);
let proj2 = new Project("Hardware", 1);
let td3 = new Todo("Nails", 0, 0, 0, 0);
let td4 = new Todo("Screws", 0, 0, 0, 1);
proj2.addTodo(td3);
proj2.addTodo(td4);
pm.addProj(proj2);
loadProjects(pm, projectManagerDiv, displayPanel);
