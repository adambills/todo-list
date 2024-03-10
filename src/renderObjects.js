import {
  folderContainer,
  taskContainer,
  folderTemplate,
  taskTemplate,
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

  const folderClone = folderTemplate.cloneNode(true);
  folderClone.classList.remove('template');
  folder.element.appendChild(folderClone);
  folderContainer.appendChild(folder.element);
}

function renderTask(task) {
  //could separate the first part of this into a different function
  //and export it to renderTaskDialog to reduce duplicate code
  //would need to add new paramaters to pass in the different DOM elements
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

  const taskClone = taskTemplate.cloneNode(true);
  taskClone.classList.remove('template');
  task.element.appendChild(taskClone);
  taskContainer.appendChild(task.element);
}

export { renderFolder, renderTask };
