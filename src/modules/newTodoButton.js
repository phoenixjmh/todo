import createNewTodoForm from "./newTodoForm";

const createNewTodoButton = (pm, project, displayPanel) => {
  const mp = document.querySelector(".main-panel");
  let createTodoFormButton = document.createElement("button");
  createTodoFormButton.classList.add("create-todo-form-button");
  createTodoFormButton.id = "todo-create-new";
  createTodoFormButton.textContent = "Create new Todo";
  let toolTipDiv = document.createElement("div");
  toolTipDiv.id = "tool-tip";
  toolTipDiv.innerHTML =
    '<p id="tip-paragraph">Try dragging and dropping a Task into a project!</p>';
  createTodoFormButton.onclick = () => {
    createNewTodoForm(pm, project, displayPanel);
  };
  let button = document.getElementById("todo-create-new");
  let toolTip = document.getElementById("tool-tip");

  if (document.body.contains(toolTip)) toolTip.remove();

  if (document.body.contains(button)) {
    button.remove();
  }
  mp.appendChild(createTodoFormButton);
  mp.appendChild(toolTipDiv);
  return createTodoFormButton;
};
export default createNewTodoButton;
