import drawExistingTodo from "./drawExistingTodo";

const drawExistingTodos = (pm, project, displayPanel) => {
  displayPanel.innerHTML = "";
  const todoArray = project.getAll();
  todoArray.forEach((todo) => {
    const tempTodoDiv = drawExistingTodo(todo, displayPanel, project, pm);
  });
};
export default drawExistingTodos;