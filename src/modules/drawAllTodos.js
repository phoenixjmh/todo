// eslint-disable-next-line import/no-cycle
import drawTodo from "./drawTodo";

const drawAllTodos = (pm, displayPanel) => {
  const allProjects = pm.getAll();
  allProjects.forEach((project) => {
    const tempTodoArr = project.getAll();
    tempTodoArr.forEach((todo) => {
      drawTodo(todo, displayPanel, project, pm);
    });
  });

  let allTodos = displayPanel.children;
  allTodos = Array.prototype.slice.call(allTodos);

  allTodos.sort((a, b) => {
    const dateA = new Date(a.childNodes[2].innerHTML);
    const dateB = new Date(b.childNodes[2].innerHTML);
    return dateA - dateB;
  });

  const parentContainer = displayPanel;
  parentContainer.innerHTML = "";
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < allTodos.length; i++) {
    if (allTodos[i].childNodes[2] !== "Set Date")
      parentContainer.appendChild(allTodos[i]);
    else {
      parentContainer.insertBefore(allTodos[i], parentContainer.firstChild);
    }
  }
};

export default drawAllTodos;
