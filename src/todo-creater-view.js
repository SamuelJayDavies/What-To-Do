function createTodoDialog() {
    const dialogBox = document.createElement("div");
    dialogBox.classList.add("dialogBox");

    const titleBox = document.createElement("input");
    titleBox.value = "text";
    titleBox.classList.add("title-box");

    const descBox = document.createElement("input");
    descBox.value = "text";
    descBox.classList.add("desc-box");

    const dateBox = document.createElement("input");
    dateBox.value = "text";
    dateBox.classList.add("date-box");

    const priorityBox = document.createElement("input");
    priorityBox.value = "select";
    priorityBox.classList.add("priority-box");

    priorityBox.appendChild(optionCreator("low"));
    priorityBox.appendChild(optionCreator("medium"));
    priorityBox.appendChild(optionCreator("high"));

    dialogBox.appendChild(titleBox);
    dialogBox.appendChild(descBox);
    dialogBox.appendChild(dateBox);
    dialogBox.appendChild(priorityBox);

    return dialogBox;
}

function optionCreator(setValue) {
    const priority = document.createElement("option");
    priority.value = setValue;
    return priority;
}

export default createTodoDialog;