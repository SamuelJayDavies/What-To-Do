import './style.css';

import todolistIcon from "./images/header/to-do-list.png";

function createHomeView() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHeader());
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

export default createHomeView;