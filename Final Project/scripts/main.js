const todoForm = document.getElementById("todo-form");
const importForm = document.getElementById("import-form");
const todoInput = document.getElementById("todo-input");
const importInput = document.getElementById("import-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const newTask = todoInput.value;

    if (newTask == "") {
            alert("Please enter a task!");
            return;
    }

    todoInput.value = "";
    addTask(newTask);
});

importForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const link = importInput.value;

    if (link == "") {
        alert("Please enter a valid link!");
        return;
    }

    importInput.value = "";
    importToDoList(link);
})

function importToDoList(link) {
    fetch(link)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            data.forEach(task => {
                addTask(task);
            });
        })
        .catch(error => {
            console.error("Error fetching and converting JSON:", error);
        });
}

function addTask(task) {
    // Creates the new Task element
    const listItem = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = task;
    listItem.appendChild(taskText);

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    listItem.appendChild(checkBox);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);

    checkBox.addEventListener("change", function() {
        if (this.checked) {
            taskText.style.textDecoration = "line-through";
        } else {
            taskText.style.textDecoration = "none"
        }
    });

    deleteButton.addEventListener("click", function() {
        todoList.removeChild(listItem);
    });

}

