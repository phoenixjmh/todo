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
import storeObject from "./scripts/Storage";
let savedProjects;
let pm = new ProjectManager();
console.log(pm.getAll());
if(localStorage.getItem("packageManager")!=null){

    savedProjects = JSON.parse(localStorage.getItem("packageManager")).projects;
    console.log("saved proj",savedProjects);
    savedProjects.forEach((item,index)=>{
        let proj=new Project(item._title,item._id,item._div);
        pm.addProj(proj);
        let todos=item.todos;
        todos.forEach((todo)=>{
            console.log(todo);
            let tempTodo=new Todo(todo._title,todo._description,todo._dueDate,'',todo._id);
            proj.addTodo(tempTodo);
        })
        
    })
    if(pm.getAll().length<1)
    {
        let defaultProject=new Project('All',0);
    pm.addProj(defaultProject);
    }
}
else{
    let proj=new Project('Project',0);
    pm.addProj(proj);
}




const displayPanel = drawProjectDisplayPanel();
const projectManagerDiv = drawProjectManager(pm, displayPanel);

//Development set up stuff


loadProjects(pm, projectManagerDiv, displayPanel);
localStorage.setItem("packageManager",JSON.stringify(pm));



