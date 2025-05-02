function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText !== "") {
        // Neue Aufgabe in die Liste einf�gen
        let li = document.createElement("li");
        li.textContent = taskText;

        document.getElementById("taskList").appendChild(li);

        // Zur Kontrolle zus�tzlich in Konsole ausgeben
        console.log("Neue Aufgabe: " + taskText);

        // Eingabefeld leeren
        input.value = "";
    }
}

