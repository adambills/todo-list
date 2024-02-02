const newFolderBtn = document.querySelector("#new-folder");
const newTaskBtn = document.querySelector("#new-task");
const newFolderDialog = document.querySelector("#new-folder-dialog");
const newTaskDialog = document.querySelector("#new-task-dialog");
const closeDialogBtns = document.querySelectorAll(".closeDialog");

const forms = document.querySelectorAll("form");

const folderContainer = document.querySelector(".folders");
const taskContainer = document.querySelector(".tasks");

const folderClone = document.querySelector(".folder.template").cloneNode(true);
folderClone.classList.remove("template");

const taskClone = document.querySelector(".task.template").cloneNode(true);
taskClone.classList.remove("template");

const folderSVG = folderClone.querySelector("svg");
const folderTitle = folderClone.querySelector(".folder-title");

const taskTitle = taskClone.querySelector(".task-title");
const taskPriority = taskClone.querySelector(".task-priority");
const taskDueDate = taskClone.querySelector(".task-due-date");
const taskDescription = taskClone.querySelector(".task-description");

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
  forms,
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
  getInputArr,
};
