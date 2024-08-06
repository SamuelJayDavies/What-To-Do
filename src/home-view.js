import './style.css';

import todolistIcon from "./images/header/to-do-list.png";
import Todo from "./todo.js";
import createTodoDialog from './todo-creater-view.js';

function createHomeView() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHeader());
    main.appendChild(createMainContent());
}

function createHeader() {
    const header = document.createElement("header");
    const headerImage = document.createElement("img");
    headerImage.src = todolistIcon;
    const headerTitle = document.createElement("h1");
    headerTitle.textContent = "What-To-Do";
    header.appendChild(headerImage);
    header.appendChild(headerTitle);
    return header;
}

function createMainContent() {
    const mainContent = document.createElement("div");
    mainContent.id = "main-content";

    mainContent.appendChild(createSideBar());
    let testTodo = createTodo("Welcome to What-To-Do", "A very simple todo list that only has what matters", "12/04/2024", "Low", false);
    const todoDisplay = createTodoDisplay(testTodo);
    todoDisplay.addEventListener("click", function() {
        removeTodo(todoDisplay);
    }, false);

    mainContent.appendChild(todoDisplay);
    return mainContent;
}

function createSideBar() {
    const sideBar = document.createElement("div");
    sideBar.classList.add("sideBar");

    const projects = document.createElement("div");
    projects.classList.add("projects");

    const projectsTitle = document.createElement("h1");
    projectsTitle.textContent = "My Projects";

    const projectsList = document.createElement("ul");
    projectsList.classList.add("projects-list");

    const homeProject = document.createElement("li");
    homeProject.textContent = "Home";

    const addNewTodo = document.createElement("button");
    addNewTodo.textContent = "+";
    addNewTodo.classList.add("add-button");

    addNewTodo.addEventListener("click", function() {
        displayTodoCreator();
    }, false);

    sideBar.appendChild(projectsTitle);
    sideBar.appendChild(projects);
    sideBar.append(addNewTodo);
    projects.appendChild(projectsList);
    projectsList.appendChild(homeProject);
    return sideBar;
}

function createTodoDisplay(newTodo) {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoHeading = document.createElement("h1");
    todoHeading.textContent = newTodo.title;
    todoHeading.classList.add("todo-title");

    const todoDesc = document.createElement("p");
    todoDesc.textContent = newTodo.description;
    todoDesc.classList.add("todo-desc");

    const todoDate = document.createElement("p");
    todoDate.textContent = newTodo.dueDate;
    todoDate.classList.add("todo-date");

    const priority = document.createElement("p");
    priority.textContent = newTodo.priority;
    priority.classList.add("priority");

    todo.appendChild(todoHeading);
    todo.appendChild(todoDesc);
    todo.appendChild(todoDate);
    todo.appendChild(priority);

    return todo;
}

function displayTodoCreator() {
    const todoDialog = createTodoDialog();
    main.appendChild(todoDialog);
    const titleInput = document.getElementById("title-box");
    const descInput = document.getElementById("desc-box");
    const dateInput = document.getElementById("date-box");
    const priorityInput = document.getElementById("priority-box");


    const saveBtn = document.getElementById("save-btn");
    saveBtn.addEventListener("click", function() {
        const mainContent = document.getElementById("main-content");

        const todoDisplay = createTodoDisplay(createTodo(titleInput.value, descInput.value, dateInput.value, priorityInput.value));
        
        todoDisplay.addEventListener("click", function() {
            mainContent.removeChild(todoDisplay);
        }, false);
        mainContent.appendChild(todoDisplay);
        main.removeChild(todoDialog);
    }, false);
}

function createTodo(title, description, date, priority) {
    const newTodo = new Todo(title, description, date, priority, false);
    return newTodo;
}

function removeTodo(todoDisplay) {
    const mainContent = document.getElementById("main-content");
    mainContent.removeChild(todoDisplay);
}

export default createHomeView;