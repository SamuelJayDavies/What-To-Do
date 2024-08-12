function createProjectDialog() {
    const dialogBox = document.createElement("div");
    dialogBox.classList.add("dialog-box");
    dialogBox.classList.add("project");

    const innerDialogBox = document.createElement("div");
    innerDialogBox.classList.add("inner-dialog-box");

    const titleHeading = document.createElement("h1");
    titleHeading.textContent = "Project Title:";

    const titleBox = document.createElement("input");
    titleBox.setAttribute("type", "text");
    titleBox.setAttribute("placeholder", "title");
    titleBox.id = "project-title-box";

    const exitButton = document.createElement("button");
    exitButton.classList.add("exit-btn");
    exitButton.id = "project-exit-btn";
    exitButton.textContent = "exit";
    exitButton.classList.add("project-button");

    const saveButton = document.createElement("button");
    saveButton.classList.add("save-btn");
    saveButton.id = "project-save-btn";
    saveButton.textContent = "save";
    saveButton.classList.add("project-button");

    innerDialogBox.appendChild(titleHeading);
    innerDialogBox.appendChild(exitButton);
    innerDialogBox.appendChild(saveButton);
    innerDialogBox.appendChild(titleBox);

    dialogBox.appendChild(innerDialogBox);
    return dialogBox;
}

export default createProjectDialog;