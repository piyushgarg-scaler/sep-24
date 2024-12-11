const boards = document.querySelectorAll(".board");
const items = document.querySelectorAll(".card");

const todoBoard = document.getElementById("todo");

const addTaskBtn = document.getElementById("add-task-btn");

// 'in-progress' : [ tasks ]
// 'todo' : [ tasks ]

function attachEventListenerToCard(card) {
  card.addEventListener("dragstart", () => {
    card.classList.add("is-dragging");
    const id = card.parentElement.id;
    const existingTasksValue = localStorage.getItem(id);
    const tasks = [];

    if (existingTasksValue) {
      existingTasks = JSON.parse(existingTasksValue);
      tasks.push(...existingTasks);
    }

    const updatedArr = tasks.filter((e) => e !== card.innerText);
    localStorage.setItem(id, JSON.stringify(updatedArr));

    card.addEventListener("dragend", () => {
      card.classList.remove("is-dragging");
      const id = card.parentElement.id;
      const existingTasksValue = localStorage.getItem(id);
      const tasks = [];

      if (existingTasksValue) {
        existingTasks = JSON.parse(existingTasksValue);
        tasks.push(...existingTasks);
      }

      tasks.push(card.innerText);
      localStorage.setItem(id, JSON.stringify(tasks));
    });
  });
}

addTaskBtn.addEventListener("click", () => {
  const task = prompt("Enter Task");
  if (!task) return;

  const p = document.createElement("p");
  p.innerText = `${task}`;
  p.classList.add("card");
  p.setAttribute("draggable", "true");
  attachEventListenerToCard(p);
  todoBoard.appendChild(p);

  const existingTasksValue = localStorage.getItem("todo");
  const tasks = [];

  if (existingTasksValue) {
    existingTasks = JSON.parse(existingTasksValue);
    tasks.push(...existingTasks);
  }

  tasks.push(task);
  localStorage.setItem("todo", JSON.stringify(tasks));
});

items.forEach((card) => attachEventListenerToCard(card));

boards.forEach((board) => {
  board.addEventListener("dragover", (e) => {
    const card = document.querySelector(".is-dragging");
    const closestElement = findClosestElement(board, e.clientY);

    if (closestElement) {
      board.insertBefore(card, closestElement);
    } else {
      board.appendChild(card);
    }
  });
});

function findClosestElement(board, mouseY) {
  const tasks = board.querySelectorAll(".card:not(.is-dragging)");

  let closestElement = null;
  let closestDistance = Number.NEGATIVE_INFINITY;

  tasks.forEach((task) => {
    const { top } = task.getBoundingClientRect();
    const distance = mouseY - top;

    if (distance < 0 && distance > closestDistance) {
      closestDistance = distance;
      closestElement = task;
    }
  });

  return closestElement;
}
