import {
  editFolderDialog,
  editFolderTitle,
  editFolderColor,
  editTaskDialog,
  editTaskTitle,
  editTaskDate,
  editLowPriority,
  editMediumPriority,
  editHighPriority,
  editTaskDescription,
} from "./domCache";

let task;
let folder;

function renderEditTaskDialog(object) {
  editTaskTitle.value = object.title;
  editTaskDate.value = object.dueDate;
  editTaskDescription.value = object.description;
  switch (object.priority) {
    case "low":
      editLowPriority.setAttribute("checked", true);
      break;
    case "medium":
      editMediumPriority.setAttribute("checked", true);
      break;
    case "high":
      editMediumPriority.setAttribute("checked", false);
      break;
  }

  task = object;
  editTaskDialog.showModal();
}

function renderEditFolderDialog(object) {
  editFolderTitle.value = object.title;
  editFolderColor.value = object.color;
  
  folder = object;
  editFolderDialog.showModal();
}

function getTask() {
  return task;
}

function getFolder() {
  return folder;
}

export { renderEditTaskDialog, renderEditFolderDialog, getTask, getFolder };
