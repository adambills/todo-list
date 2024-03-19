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
import {
  renderEditTaskDialog,
  renderEditFolderDialog,
} from "./renderEditDialogs";
import { changeCompletionStatus, deleteObject } from "./manageObjects";

function renderNewFolder(folder) {
  folderSVG.setAttribute("fill", folder.color);
  folderTitle.innerText = folder.title;

  const folderClone = folderTemplate.cloneNode(true);
  folderClone.classList.remove("template");
  folder.element.appendChild(folderClone);
  folderContainer.appendChild(folder.element);

  activateButtons(folder, "folder");
}

function renderNewTask(task) {
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
  taskClone.classList.remove("template");
  task.element.appendChild(taskClone);
  taskContainer.appendChild(task.element);

  activateButtons(task, "task");
}

function activateButtons(object, objectType) {
  const taskCheckmark = object.element.querySelector(".taskCheckmark");
  const editObjectBtn = object.element.querySelector(".editObject");
  const deleteObjectBtn = object.element.querySelector(".deleteObject");

  if (taskCheckmark) {
    taskCheckmark.addEventListener("click", (e) => {
      e.stopPropagation();
      changeCompletionStatus(object, taskCheckmark);
    });
  }

  editObjectBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (objectType === "task") {
      renderEditTaskDialog(object);
    } else {
      renderEditFolderDialog(object);
    }
  });

  deleteObjectBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    deleteObject(object, objectType);
  });
}

function renderEditedFolder(folder) {
  const title = folder.element.querySelector(".folder-title");
  const color = folder.element.querySelector("svg");

  console.log(color);
  console.log(folder.color);

  title.innerText = folder.title;
  color.setAttribute("fill", folder.color);
}

function renderEditedTask(task) {
  const title = task.element.querySelector(".task-title");
  const dueDate = task.element.querySelector(".task-due-date");
  const priority = task.element.querySelector(".task-priority");
  const description = task.element.querySelector(".task-description");

  title.innerText = task.title;
  dueDate.innerText = task.dueDate;
  description.innerText = task.description;
  switch (task.priority) {
    case "low":
      priority.setAttribute("fill", "yellow");
      break;
    case "medium":
      priority.setAttribute("fill", "orange");
      break;
    case "high":
      priority.setAttribute("fill", "red");
      break;
  }
}

export { renderNewFolder, renderNewTask, renderEditedFolder, renderEditedTask };

/* 
click edit btn 
get object
get object type
get values from clicked object
render folder/task dialog with object values
  with "update folder/task" submit btn

process form submission
  receive updated values
  update object
  update object rendering


1. clone existing dialogs
  query all inputs / buttons and store in new variables
  update input values with object values
  re-add event listener for close dialog
  add new event listener for submit

2. add edit dialogs to html
  query all inputs in domCache instead of render module
  update input values with object values
  change event listeners in index.js




*/
