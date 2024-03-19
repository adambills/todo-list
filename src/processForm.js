import { getActiveFolder } from "./manageObjects";
import { getInputArr, newTaskBtn } from "./domCache";
import {
  renderNewFolder,
  renderNewTask,
  renderEditedFolder,
  renderEditedTask,
} from "./renderObjects";
import { getTask, getFolder } from "./renderEditDialogs";

function processNewForm(form) {
  const activeFolder = getActiveFolder();
  const values = getInputValues(form);

  if (form.classList.contains("folder-form")) {
    activeFolder.addNewFolder(...values);
    const folderArr = activeFolder.folderArr;
    const index = folderArr.length - 1;
    const folder = folderArr[index];
    folder.parent = activeFolder;

    renderNewFolder(folder);
  } else if (form.classList.contains("task-form")) {
    activeFolder.addNewTask(...values);
    const taskArr = activeFolder.taskArr;
    const index = taskArr.length - 1;
    const task = taskArr[index];
    task.parent = activeFolder;

    renderNewTask(task);
  }
}

function processEditForm(form) {
  const valuesArr = [...getInputValues(form)];

  if (form.classList.contains("folder-form")) {
    const folder = getFolder();
    folder.updateValues(valuesArr);

    renderEditedFolder(folder);
  } else if (form.classList.contains("task-form")) {
    const task = getTask();
    task.updateValues(valuesArr);

    renderEditedTask(task);
  }
  //update object properties; new method?
  //query object nodes; new module
  //update object nodes
}

function getInputValues(form) {
  const values = [];
  const inputArr = getInputArr(form);

  for (const input of inputArr) {
    values.push(input.value);
  }

  return values;
}

export { processNewForm, processEditForm };
