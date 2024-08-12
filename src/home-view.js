import "./style.css";

import todolistIcon from "./images/header/to-do-list.png";
import Todo from "./todo.js";
import Project from "./project.js";
import createTodoDialog from "./todo-creater-view.js";
import createProjectDialog from "./project-creator-view.js";

var currentProject;
var allProjects = [];

function createHomeView() {
  if (localStorage.getItem("allProjects") == null) {
    localStorage.setItem(
      "allProjects",
      JSON.stringify([
        new Project("Getting Started", [
          new Todo(
            "Welcome to What-To-Do",
            "A very simple todo list that only has what matters",
            "2024-08-11",
            "Low",
            false,
          ),
        ]),
      ]),
    );
  }
  var allProjectsJSON = JSON.parse(localStorage.getItem("allProjects"));

  for (let i = 0; i < allProjectsJSON.length; i++) {
    allProjects.push(
      new Project(
        allProjectsJSON.at(i)._title,
        createTodos(allProjectsJSON.at(i).todos),
      ),
    );
  }
  currentProject = allProjects.at(0);
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHeader());
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

  const innerSideBar = document.createElement("div");
  innerSideBar.classList.add("inner-sidebar");

  const projects = document.createElement("div");
  projects.classList.add("projects");

  const projectsTitle = document.createElement("h1");
  projectsTitle.textContent = "My Projects";

  const projectsList = document.createElement("ul");
  projectsList.id = "project-list";

  const addNewTodo = document.createElement("button");
  addNewTodo.textContent = "+ Todo";
  addNewTodo.classList.add("add-button");

  addNewTodo.addEventListener(
    "click",
    function () {
      displayTodoCreator();
    },
    false,
  );

  const addNewProject = document.createElement("button");
  addNewProject.textContent = "+ Project";
  addNewProject.classList.add("project-button");

  addNewProject.addEventListener(
    "click",
    function () {
      displayProjectCreator();
    },
    false,
  );

  const sideBarButtons = document.createElement("div");
  sideBarButtons.classList.add("side-bar-buttons");

  sideBarButtons.appendChild(addNewTodo);
  sideBarButtons.appendChild(addNewProject);

  innerSideBar.appendChild(projectsTitle);
  innerSideBar.appendChild(projects);

  sideBar.appendChild(innerSideBar);
  sideBar.append(sideBarButtons);
  projects.appendChild(projectsList);
  return sideBar;
}

function loadAllProjects() {
  const projectList = document.getElementById("project-list");
  allProjects.forEach((project) => {
    const projectDisplay = createProjectDisplay(project);
    projectList.appendChild(projectDisplay);
  });
}

function createTodoDisplay(newTodo) {
  const todo = document.createElement("div");
  todo.classList.add("todo");
  todo.id = newTodo._title;

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
  editBtn.style.visibility = "hidden";

  editBtn.addEventListener(
    "click",
    function () {
      displayTodoCreator(newTodo);
    },
    false,
  );

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  deleteBtn.id = "delete-btn";
  deleteBtn.style.visibility = "hidden";

  deleteBtn.addEventListener(
    "click",
    function () {
      removeTodo(todo, newTodo);
    },
    false,
  );

  todo.appendChild(todoHeading);
  todo.appendChild(todoDesc);
  todo.appendChild(todoDate);
  todo.appendChild(priority);
  todo.appendChild(editBtn);
  todo.appendChild(deleteBtn);

  todo.addEventListener(
    "mouseleave",
    function () {
      editBtn.style.visibility = "hidden";
      deleteBtn.style.visibility = "hidden";
    },
    false,
  );

  todo.addEventListener(
    "mouseover",
    function () {
      editBtn.style.visibility = "visible";
      deleteBtn.style.visibility = "visible";
    },
    false,
  );

  return todo;
}

function displayTodoCreator(editedTodo) {
  const todoDialog = createTodoDialog();
  main.appendChild(todoDialog);
  const titleInput = document.getElementById("title-box");
  const descInput = document.getElementById("desc-box");
  const dateInput = document.getElementById("date-box");
  const priorityInput = document.getElementById("priority-box");

  if (editedTodo != null) {
    titleInput.value = editedTodo._title;
    descInput.value = editedTodo.description;
    dateInput.value = editedTodo.dueDate;
    priorityInput.value = editedTodo.priority;
  }

  const saveBtn = document.getElementById("save-btn");
  saveBtn.addEventListener(
    "click",
    function () {
      if (editedTodo != null) {
        const todoDisplayToRemove = document.getElementById(editedTodo._title);
        console.log(todoDisplayToRemove);
        const deleteBtn = todoDisplayToRemove.querySelector("#delete-btn");
        console.log("This is the delete btn" + deleteBtn);
        deleteBtn.click();
      }

      const todoContent = document.getElementById("todo-content");
      const newTodo = new Todo(
        titleInput.value,
        descInput.value,
        dateInput.value,
        priorityInput.value,
      );
      currentProject.todos.push(newTodo);
      const todoDisplay = createTodoDisplay(newTodo);
      todoContent.appendChild(todoDisplay);
      main.removeChild(todoDialog);

      let newAllProjects = [];

      allProjects.forEach((project) => {
        if (project._title != currentProject._title) {
          newAllProjects.push(project);
        } else {
          newAllProjects.push(currentProject);
        }
      });

      allProjects = newAllProjects;

      localStorage.setItem("allProjects", JSON.stringify(allProjects));
    },
    false,
  );

  const exitBtn = document.getElementById("exit-btn");
  exitBtn.addEventListener(
    "click",
    function () {
      main.removeChild(todoDialog);
    },
    false,
  );
}

function createTodo(jsonTodo) {
  const newTodo = new Todo(
    jsonTodo._title,
    jsonTodo._description,
    jsonTodo._dueDate,
    jsonTodo._priority,
    false,
  );
  return newTodo;
}

function createTodos(jsonTodos) {
  let todoList = [];
  jsonTodos.forEach((todo) => {
    todoList.push(createTodo(todo));
  });
  return todoList;
}

function addTodoToDisplay(todo) {
  const todoContent = document.getElementById("todo-content");
  const todoDisplay = createTodoDisplay(todo);
  todoContent.appendChild(todoDisplay);
}

function removeTodo(todoDisplay, todoToRemove) {
  const todoContent = document.getElementById("todo-content");
  todoContent.removeChild(todoDisplay);
  let newCurrentProjectTodos = [];
  currentProject.todos.forEach((todo) => {
    if (todo != todoToRemove) {
      newCurrentProjectTodos.push(todo);
    }
  });
  currentProject.todos = newCurrentProjectTodos;

  let newAllProjects = [];

  allProjects.forEach((project) => {
    if (project._title != currentProject._title) {
      newAllProjects.push(project);
    } else {
      newAllProjects.push(currentProject);
    }
  });

  allProjects = newAllProjects;

  localStorage.setItem("allProjects", JSON.stringify(allProjects));
}

function createProjectDisplay(project) {
  const newProject = document.createElement("li");
  newProject.textContent = project.title;
  newProject.classList.add("project");

  newProject.addEventListener(
    "click",
    function () {
      loadTodosFromProject(project);
      currentProject = project;
    },
    false,
  );

  return newProject;
}

function displayProjectCreator() {
  const projectDialog = createProjectDialog();
  main.appendChild(projectDialog);
  const projectTitle = document.getElementById("project-title-box");

  const saveBtn = document.getElementById("project-save-btn");
  saveBtn.addEventListener(
    "click",
    function () {
      const project = new Project(projectTitle.value, []);
      const projectDisplay = createProjectDisplay(project);
      const projectList = document.getElementById("project-list");

      projectDisplay.addEventListener(
        "click",
        function () {
          loadTodosFromProject(project);
        },
        false,
      );
      projectList.appendChild(projectDisplay);
      allProjects.push(project);
      console.log(allProjects);
      localStorage.setItem("allProjects", JSON.stringify(allProjects));
      main.removeChild(projectDialog);
    },
    false,
  );

  const exitBtn = document.getElementById("project-exit-btn");
  exitBtn.addEventListener(
    "click",
    function () {
      main.removeChild(projectDialog);
    },
    false,
  );
}

function loadTodosFromProject(project) {
  const todoContent = document.getElementById("todo-content");
  todoContent.textContent = "";
  if (project.todos != null) {
    project.todos.forEach((todo) => {
      addTodoToDisplay(todo);
    });
  }
}

export default createHomeView;
