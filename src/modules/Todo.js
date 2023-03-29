

export default class Todo {
  constructor(Title,  dueDate,  id) {
    this._title = Title;
    this._dueDate = dueDate;
    this.id = id;
  }
  get title() {
    return this._title;
  }
 
  get dueDate() {
    return this._dueDate;
  }
  
  get id() {
    return this._id;
  }
  set title(title) {
    
    this._title = title;
  }
 
  set dueDate(dueDate) {
    this._dueDate = dueDate;
  }
  
  set id(id) {
    this._id = id;
  }
}
