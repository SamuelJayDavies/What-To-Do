import Todo from "./todo.js";

function createTodoDialog() {
    const dialogBox = document.createElement("div");
    dialogBox.classList.add("dialog-box");

    const innerDialogBox = document.createElement("div");
    innerDialogBox.classList.add("inner-dialog-box");

    const titleBox = document.createElement("input");
    titleBox.setAttribute("type", "text");
    titleBox.setAttribute("placeholder", "title");
    titleBox.id = "title-box";

    const descBox = document.createElement("input");
    descBox.setAttribute("type", "text");
    descBox.setAttribute("name", "description");
    descBox.id = "desc-box";

    const dateBox = document.createElement("input");
    dateBox.setAttribute("type", "date");
    dateBox.id = "date-box";

    const priorityBox = document.createElement("select");
    priorityBox.setAttribute("name", "priority");
    priorityBox.id = "priority-box";

    priorityBox.appendChild(optionCreator("low"));
    priorityBox.appendChild(optionCreator("medium"));
    priorityBox.appendChild(optionCreator("high"));

    const exitButton = document.createElement("button");
    exitButton.id = "exit-btn";
    exitButton.textContent = "exit";

    const saveButton = document.createElement("button");
    saveButton.id = "save-btn";
    saveButton.textContent = "save";
    saveButton.id = "save-btn";

    innerDialogBox.appendChild(titleBox);
    innerDialogBox.appendChild(dateBox);
    innerDialogBox.appendChild(priorityBox);
    innerDialogBox.appendChild(descBox);
    innerDialogBox.appendChild(exitButton);
    innerDialogBox.appendChild(saveButton);

    dialogBox.appendChild(innerDialogBox);

    return dialogBox;
}

function optionCreator(setValue) {
    const priority = document.createElement("option");
    priority.value = setValue;
    priority.textContent = setValue;
    return priority;
}

export default createTodoDialog;