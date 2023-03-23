export default class Project {
  todos = [];
  constructor(title, id, div) {
    this._title = title;
    this._id = id;
    this._div = div;
  }
  get title() {
    return this._title;
  }
  set title(title) {
    this._title = title;
  }
  get id() {
    return this._id;
  }
  get div() {
    return this._div;
  }
  set div(div) {
    this._div = div;
  }
  
  addTodo(todo) {
    this.todos.push(todo);
  }
  getAll() {
    return this.todos;
  }
}
