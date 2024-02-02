import {
  folderContainer,
  taskContainer,
  folderClone,
  taskClone,
  folderSVG,
  folderTitle,
  taskTitle,
  taskPriority,
  taskDueDate,
  taskDescription,
} from "./domCache";
import { getActiveFolder } from "./manageFolders";

// task: title, dueDate, priority, description
// folder: title, color

const activeFolder = getActiveFolder();
const folderArr = activeFolder.folderArr;
const taskArr = activeFolder.taskArr;

function renderActiveFolder() {
  const folderNodes = [...folderContainer.querySelectorAll(".folderDiv")];
  const taskNodes = [...taskContainer.querySelectorAll(".taskDiv")];
  const allNodes = folderNodes.concat(taskNodes);

  for (const node of allNodes) {
    if (node) node.parentNode.removeChild(node);
    if (node.firstChild) node.removeChild(node.firstChild);
  }

  for (const folder of folderArr) {
    renderFolder(folder);
  }

  for (const task of taskArr) {
    renderTask(task);
  }
}

function renderNewFolder() {
  const index = folderArr.length - 1;
  const folder = folderArr[index];

  renderFolder(folder);
}

function renderNewTask() {
  const index = taskArr.length - 1;
  const task = taskArr[index];

  renderTask(task);
}

function renderFolder(folder) {
  folderSVG.setAttribute("fill", folder.color);
  folderTitle.innerText = folder.title;

  const newFolderClone = folderClone.cloneNode(true);
  folder.element.appendChild(newFolderClone);
  folderContainer.appendChild(folder.element);
}

function renderTask(task) {
  taskTitle.innerText = task.title;
  taskDueDate.innerText = task.dueDate;
  taskDescription.innerText = task.description;
  switch (task.priority) {
    case "low":
      taskPriority.setAttribute("fill", "yellow");
      break;
    case "medium":
      taskPriority.setAttribute("fill", "orange");
      break;
    case "high":
      taskPriority.setAttribute("fill", "red");
      break;
  }

  const newTaskClone = taskClone.cloneNode(true);
  task.element.appendChild(newTaskClone);
  taskContainer.appendChild(task.element);
}

export { renderActiveFolder, renderNewFolder, renderNewTask };

// Add module for rendering folders and tasks
