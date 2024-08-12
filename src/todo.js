class Todo {
    constructor(title, description, dueDate, priority, isCompleted) {
      this._title = title;
      this._description = description;
      this._dueDate = dueDate;
      this._priority = priority;
      this._isCompleted = isCompleted;
    }
  
    get title() {
      return this._title;
    }
  
    get description() {
      return this._description;
    }
  
    get dueDate() {
      return this._dueDate;
    }
  
    get priority() {
      return this._priority;
    }
  
    get isCompleted() {
      return this._isCompleted;
    }
  
    get title() {
      return this._title;
    }
  
    set title(newTitle) {
      this._title = newTitle;
    }
  }
  
  export default Todo;
  