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

export { renderFolder, renderTask };

// Add module for rendering folders and tasks
