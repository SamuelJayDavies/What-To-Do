class Project {

    todos = [];

    constructor(title, todos) {
        this._title = title;
        this.todos = todos;
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    get todos() {
        return this._todos;
    }

    get title() {
        return this._title;
    }
}

export default Project;