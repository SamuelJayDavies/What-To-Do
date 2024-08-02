import './style.css';

import todolistIcon from "./images/header/to-do-list.png";
import Todo from "./todo.js";

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
    mainContent.classList.add("main-content");

    mainContent.appendChild(createSideBar());
    let testTodo = new Todo("Welcome to What-To-Do", "A very simple todo list that only has what matters", "12/04/2024", "Low", false);

    mainContent.appendChild(createTodo(testTodo));
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

    sideBar.appendChild(projectsTitle);
    sideBar.appendChild(projects);
    projects.appendChild(projectsList);
    projectsList.appendChild(homeProject);
    return sideBar;
}

function createTodo(newTodo) {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoHeading = document.createElement("h1");
    todoHeading.textContent = newTodo.title;

    const todoDesc = document.createElement("p");
    todoDesc.textContent = newTodo.description;

    const todoDate = document.createElement("p");
    todoDate.textContent = newTodo.dueDate;

    const priority = document.createElement("p");
    priority.textContent = newTodo.priority;

    const isCompleted = document.createElement("p");
    isCompleted.textContent = newTodo.isCompleted;

    todo.appendChild(todoHeading);
    todo.appendChild(todoDesc);
    todo.appendChild(todoDate);
    todo.appendChild(priority);
    todo.appendChild(isCompleted);

    return todo;
}

export default createHomeView;