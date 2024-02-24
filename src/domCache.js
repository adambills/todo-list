const newFolderBtn = document.querySelector("#new-folder");
const newTaskBtn = document.querySelector("#new-task");
const newFolderDialog = document.querySelector("#new-folder-dialog");
const newTaskDialog = document.querySelector("#new-task-dialog");
const closeDialogBtns = document.querySelectorAll(".closeDialog");

const taskDialog = document.querySelector('#display-task-dialog');
const dialogTaskTitle = taskDialog.querySelector('h3');
const dialogTaskDueDate = taskDialog.querySelector('.dialog-task-due-date');
const dialogTaskDescription = taskDialog.querySelector('.dialog-task-description');
const dialogTaskPriority = taskDialog.querySelector('.dialog-task-priority');

const header = document.querySelector("#title");

const folderLinkContainer = document.querySelector("#folder-links");
const folderLinkTemplate = document.querySelector(".folder-link.template");
const linkDividerTemplate = document.querySelector(".divider.template");

const forms = document.querySelectorAll("form");

const folderContainer = document.querySelector(".folders");
const taskContainer = document.querySelector(".tasks");

const folderTemplate = document.querySelector(".folder.template").cloneNode(true);

const taskTemplate = document.querySelector(".task.template").cloneNode(true);

const folderSVG = folderTemplate.querySelector("svg");
const folderTitle = folderTemplate.querySelector(".folder-title");

const taskTitle = taskTemplate.querySelector(".task-title");
const taskPriority = taskTemplate.querySelector(".task-priority");
const taskDueDate = taskTemplate.querySelector(".task-due-date");
const taskDescription = taskTemplate.querySelector(".task-description");

function getInputArr(form) {
  const inputs = form.querySelectorAll("input");
  const inputArr = [...inputs];
  const textarea = form.querySelector("textarea");

  if (textarea) inputArr.push(textarea);

  for (let i = inputArr.length - 1; i > 0; i--) {
    if (
      inputArr[i].getAttribute("type") === "radio" &&
      !inputArr[i].matches(":checked")
    ) {
      inputArr.splice(i, 1);
    }
  }

  return inputArr;
}

export {
  newFolderBtn,
  newTaskBtn,
  newFolderDialog,
  newTaskDialog,
  closeDialogBtns,
  taskDialog,
  dialogTaskTitle,
  dialogTaskDueDate,
  dialogTaskDescription,
  dialogTaskPriority,
  header,
  folderLinkContainer,
  folderLinkTemplate,
  linkDividerTemplate,
  forms,
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
  getInputArr,
};
