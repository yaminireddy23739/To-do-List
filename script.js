const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const emptyMsg = document.getElementById("emptyMsg");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const leftDiv = document.createElement("div");
    leftDiv.className = "task-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = taskText;

    checkbox.onclick = () => {
        span.classList.toggle("completed");
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = () => {
        li.remove();
        checkEmpty();
        updateTaskCount(); 
    };

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);

    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

    checkEmpty();
    updateTaskCount(); 
}

function checkEmpty() {
    emptyMsg.style.display = taskList.children.length === 0 ? "block" : "none";
}

function updateTaskCount() {
    taskCount.textContent = taskList.children.length;
}


checkEmpty();
updateTaskCount();

function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    document.getElementById("dateTime").textContent =
        now.toLocaleDateString('en-IN', options);
}

updateDateTime();
