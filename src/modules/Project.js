export default class Project {
  todos = [];
  constructor(title, id) {
    this._title = title;
    this._id = id;
   
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
 
  addTodo(todo) {
    this.todos.push(todo);
  }
  getAll() {
    return this.todos;
  }
}
