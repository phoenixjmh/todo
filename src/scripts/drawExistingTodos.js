import drawAllTodos from "./drawAllTodos";
import drawTodo from "./drawTodo";

const drawExistingTodos = (pm, project, displayPanel) => {
  displayPanel.innerHTML = "";
  if(project.title==="All"){
    drawAllTodos(pm,displayPanel);
  }
  else{
    const todoArray = project.getAll();
    todoArray.forEach((todo) => {
      const tempTodoDiv = drawTodo(todo, displayPanel, project, pm);
    });

  }
};
export default drawExistingTodos;
