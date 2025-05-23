// App starten: Aufgaben laden
window.onload = function () {
    loadTasks();
};

// Aufgabe hinzufügen und speichern
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let dateInput = document.getElementById("dateInput");
    let taskText = taskInput.value.trim();
    let taskDate = dateInput.value;
    let error = document.getElementById("errorMsg");

    if (taskText === "") {
        error.textContent = "Bitte gib eine Aufgabe ein.";
        return;
    }

    error.textContent = "";
    let task = { text: taskText, date: taskDate };
    createTaskElement(task);
    saveTask(task);

    taskInput.value = "";
    dateInput.value = "";
}

// Aufgaben-Element erstellen und anzeigen
function createTaskElement(task) {
    let li = document.createElement("li");
    li.textContent = task.text + (task.date ? " (Fällig: " + task.date + ")" : "");

    if (task.date && new Date(task.date) < new Date()) {
        li.classList.add("overdue");
    }

    li.onclick = function () {
        li.remove();
        removeTask(task);
    };

    document.getElementById("taskList").appendChild(li);
}

// Aufgaben in localStorage speichern
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Aufgabe aus localStorage löschen
function removeTask(taskToRemove) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => !(task.text === taskToRemove.text && task.date === taskToRemove.date));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Aufgaben aus localStorage laden
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => createTaskElement(task));
}

// Aufgaben filtern
function filterTasks() {
    let filter = document.getElementById("filterInput").value.toLowerCase();
    let listItems = document.querySelectorAll("#taskList li");

    listItems.forEach(li => {
        let text = li.textContent.toLowerCase();
        if (text.includes(filter)) {
            li.style.display = "";
        } else {
            li.style.display = "none";
        }
    });
}



