// Beim Laden: Aufgaben aus Speicher anzeigen
window.onload = function () {
    loadTasks();
};

// Aufgabe hinzufügen
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    let error = document.getElementById("errorMsg");

    if (taskText === "") {
        error.textContent = "Bitte gib eine Aufgabe ein.";
        return;
    }

    error.textContent = ""; // Fehler zurücksetzen
    createTaskElement(taskText);
    saveTask(taskText);
    input.value = "";
}

// Aufgabe als <li> anzeigen mit Löschfunktion
function createTaskElement(text) {
    let li = document.createElement("li");
    li.textContent = text;

    li.onclick = function () {
        li.remove();
        removeTask(text);
    };

    document.getElementById("taskList").appendChild(li);
}

// Aufgaben in localStorage speichern
function saveTask(text) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Aufgabe aus localStorage entfernen
function removeTask(text) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Aufgaben beim Start anzeigen
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => createTaskElement(task));
}


