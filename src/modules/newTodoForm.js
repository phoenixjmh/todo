/* eslint-disable no-use-before-define */
import drawExistingTodos from "./drawExistingTodos";
import Todo from "./Todo";
import saveWork from "./Storage";

const createNewTodoForm = (pm, project, displayPanel) => {
  const totalTodos = () => {
    let sum = 0;
    pm.getAll().forEach((p) => {
      p.getAll().forEach(() => {
        sum += 1;
      });
    });
    return sum;
  };
  const newTodoFormDiv = document.createElement("div");
  newTodoFormDiv.classList.add("create-todo-form");
  const newTodoForm = document.createElement("form");
  newTodoForm.id = "todo-form";
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "form-todo-title");
  titleLabel.textContent = "todo:";
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.id = "form-Todo-title";
  const createButton = document.createElement("button");
  createButton.textContent = "+Add";
  createButton.classList.add("form-create-td");
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.classList.add("form-remove-td");
  const buttonPanel = document.createElement("div");
  buttonPanel.id = "form-buttons-td";
  buttonPanel.appendChild(createButton);
  buttonPanel.appendChild(cancelButton);
  newTodoForm.appendChild(titleLabel);
  newTodoForm.appendChild(titleInput);
  newTodoFormDiv.appendChild(newTodoForm);
  newTodoFormDiv.appendChild(buttonPanel);
  document.body.appendChild(newTodoFormDiv);

  titleInput.focus();

  cancelButton.onclick = () => {
    newTodoFormDiv.remove();
  };
  newTodoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addToDOM();
  });
  createButton.addEventListener("click", () => {
    addToDOM();
  });

  const addToDOM = () => {
    const date = "Set Date";

    if (titleInput.value !== "") {
      const tempTodoName = new Todo(titleInput.value, date, totalTodos());

      project.addTodo(tempTodoName);
      newTodoFormDiv.remove();
      drawExistingTodos(pm, project, displayPanel);
      saveWork(pm);
    }
  };
};
export default createNewTodoForm;
