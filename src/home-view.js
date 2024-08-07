import './style.css';

import todolistIcon from "./images/header/to-do-list.png";
import Todo from "./todo.js";
import Project from './project.js';
import createTodoDialog from './todo-creater-view.js';
import createProjectDialog from './project-creator-view.js';

var currentProject;
var allProjects = [new Project("Getting Started", [new Todo("Welcome to What-To-Do", 
    "A very simple todo list that only has what matters", "12/04/2024", "Low", false)])];

function createHomeView() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHeader());
    currentProject = allProjects.at(0);
    main.appendChild(createMainContent());
    loadAllProjects();
    loadTodosFromProject(currentProject);
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

    const todoContent = document.createElement("div");
    todoContent.id = "todo-content";
    mainContent.appendChild(createSideBar());
    mainContent.appendChild(todoContent);
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
    projectsList.id = "project-list";

    const addNewTodo = document.createElement("button");
    addNewTodo.textContent = "+ Todo";
    addNewTodo.classList.add("add-button");

    addNewTodo.addEventListener("click", function() {
        displayTodoCreator();
    }, false);

    const addNewProject = document.createElement("button");
    addNewProject.textContent = "+ Project";
    addNewProject.classList.add("project-button");

    addNewProject.addEventListener("click", function() {
        displayProjectCreator();
    }, false);

    const sideBarButtons = document.createElement("div");
    sideBarButtons.classList.add("side-bar-buttons");

    sideBarButtons.appendChild(addNewTodo);
    sideBarButtons.appendChild(addNewProject);

    sideBar.appendChild(projectsTitle);
    sideBar.appendChild(projects);
    sideBar.append(sideBarButtons);
    projects.appendChild(projectsList);
    return sideBar;
}

function loadAllProjects() {
    const projectList = document.getElementById("project-list");
    console.log(projectList);
    allProjects.forEach((project) => {
        const projectDisplay = createProjectDisplay(project);
        projectList.appendChild(projectDisplay);
    });
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

    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";

    deleteBtn.addEventListener("click", function() {
        removeTodo(todo);
    }, false);

    todo.appendChild(todoHeading);
    todo.appendChild(todoDesc);
    todo.appendChild(todoDate);
    todo.appendChild(priority);

    todo.addEventListener("mouseleave", function() {
        todo.removeChild(editBtn);
        todo.removeChild(deleteBtn);

        console.log("Out");
    }, false);

    todo.addEventListener("mouseover", function() {
        todo.appendChild(editBtn);
        todo.appendChild(deleteBtn);

        console.log("In");
    }, false);

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
        const todoContent = document.getElementById("todo-content");
        const newTodo = new Todo(titleInput.value, descInput.value, dateInput.value, priorityInput.value);
        currentProject.todos.push(newTodo);
        const todoDisplay = createTodoDisplay(newTodo);
        todoContent.appendChild(todoDisplay);
        main.removeChild(todoDialog);
    }, false);

    const exitBtn = document.getElementById("exit-btn");
    exitBtn.addEventListener("click", function() {
        main.removeChild(todoDialog);
    }, false);
}

function createTodo(title, description, date, priority) {
    const newTodo = new Todo(title, description, date, priority, false);
    return newTodo;
}

function addTodoToDisplay(todo) {
    const todoContent = document.getElementById("todo-content");
    const todoDisplay = createTodoDisplay(todo);
    todoContent.appendChild(todoDisplay);
}

function removeTodo(todoDisplay) {
    const todoContent = document.getElementById("todo-content");
    todoContent.removeChild(todoDisplay);
}

function createProjectDisplay(project) {
    const newProject = document.createElement("li");
    newProject.textContent = project.title;
    newProject.classList.add("project");

    newProject.addEventListener("click", function() {
        loadTodosFromProject(project);
        currentProject = project;
    }, false);

    return newProject;
}

function displayProjectCreator() {
    const projectDialog = createProjectDialog();
    main.appendChild(projectDialog);
    const projectTitle = document.getElementById("project-title-box");

    const saveBtn = document.getElementById("project-save-btn");
    saveBtn.addEventListener("click", function() {
        const mainContent = document.getElementById("main-content");
        const project = new Project(projectTitle.value, []);
        const projectDisplay = createProjectDisplay(project);
        const projectList = document.getElementById("project-list");

        projectDisplay.addEventListener("click", function() {
            loadTodosFromProject(project);
        }, false);
        projectList.appendChild(projectDisplay);
        allProjects.push(project);
        main.removeChild(projectDialog);
    }, false);

    const exitBtn = document.getElementById("project-exit-btn");
    exitBtn.addEventListener("click", function() {
        main.removeChild(projectDialog);
    }, false);
}

function loadTodosFromProject(project) {
    const todoContent = document.getElementById("todo-content");
    todoContent.textContent = "";
    project.todos.forEach((todo) => {
        addTodoToDisplay(todo);
    });
}

export default createHomeView;