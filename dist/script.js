document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    const addButton = document.getElementById("add-button");
    const textbox = document.getElementById("new-task");

    addButton.addEventListener("click", addBtnClick);

    textbox.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addBtnClick();
        }
    });

    addTask("Clean bathroom");
    addTask("Study for big exam");
    addTask("Feed fish");
}

function addBtnClick() {
    const textbox = document.getElementById("new-task");
    const task = textbox.value.trim();

    if (task !== "") {
        addTask(task);
    }

    textbox.value = "";
    textbox.focus();
}

function addTask(task) {
    const taskList = document.getElementById("task-list");
    const listItem = document.createElement("li");

    listItem.innerHTML =
        '<span class="task-text"></span>' +
        '<button class="done-btn" type="button">&#10006;</button>';

    listItem.querySelector(".task-text").textContent = task;
    listItem.querySelector(".done-btn").setAttribute(
        "aria-label",
        "Remove task: " + task
    );

    taskList.appendChild(listItem);

    const doneButtons = document.querySelectorAll(".done-btn");
    const lastDoneButton = doneButtons[doneButtons.length - 1];

    lastDoneButton.addEventListener("click", removeTask);
}

function removeTask(event) {
    const listItem = event.target.parentNode;
    const taskList = document.getElementById("task-list");

    taskList.removeChild(listItem);
}
