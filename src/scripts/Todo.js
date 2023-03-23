export default class Todo {
    constructor(Title, Description, dueDate, priority, id) {
      this._title = Title;
      this._description = Description;
      this._dueDate = dueDate;
      this._priority = priority;
      this.id = id;
    }
    get title() {
      return this._title;
    }
    get description(){return this._description};
    get dueDate(){return this._dueDate};
    get priority(){return this._priority};
    get id(){return this._id};
    set title(title){
      this._title=title;
    } 
    set description(description){
      this._description=description;
    }
    set dueDate(dueDate){
      this._dueDate=dueDate;
    }
    set priority(priority){
      this._priority=priority;
    }
    set id(id){
      this._id=id;
    }
  }