// SCTP-DevOps-Q2 - Simple task tracker logic

const input = document.getElementById("taskInput");
const addButton = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", () => {
  const task = input.value.trim();
  if (task) {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
    input.value = "";
    console.log(`Task added: ${task}`);
  }
});
