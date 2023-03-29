/* eslint-disable no-underscore-dangle */
export default class Todo {
  constructor(Title, dueDate, id) {
    this._title = Title;
    this._dueDate = dueDate;
    this.id = id;
  }

  get title() {
    return this._title;
  }

  set title(title) {
    this._title = title;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(dueDate) {
    this._dueDate = dueDate;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }
}
