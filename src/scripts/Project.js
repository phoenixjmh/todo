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
  
    // This must ALWAYS be called from an already existing, and inserted into ProjectManager project. Calling this on a variable will do nothing, except modify the object. That object was simply COPIED into the project manager, as it was when it was copied. To use this function, make sure to access that copy. save time don't be stupid.
    addTodo(todo) {
      this.todos.push(todo);
    }
    getAll() {
      return this.todos;
    }
  }