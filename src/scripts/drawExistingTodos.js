import drawTodo from "./drawTodo";

const drawExistingTodos = (pm, project, displayPanel) => {
  displayPanel.innerHTML = "";
  const todoArray = project.getAll();
  todoArray.forEach((todo) => {
    const tempTodoDiv = drawTodo(todo, displayPanel, project, pm);
  });
};
export default drawExistingTodos;
