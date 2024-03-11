import Folder from "./Folder";
import renderActiveFolder from "./renderActiveFolder";
import { header } from "./domCache";
import { folderContainer, taskContainer } from "./domCache";

const rootFolder = new Folder("Home", "blue");
let activeFolder = rootFolder;
let selectedObject;

function getSelectedObject(objectElement) {
  assignSelectedObject(rootFolder, objectElement);
  return selectedObject;
}

function getActiveFolder() {
  return activeFolder;
}

function setActiveFolder() {
  const folderElement = this;

  assignSelectedObject(rootFolder, folderElement);
  activeFolder = selectedObject;

  header.innerText = activeFolder.title;
  const folderArr = activeFolder.folderArr;
  const taskArr = activeFolder.taskArr;
  renderActiveFolder(activeFolder, folderArr, taskArr);
}

function assignSelectedObject(currentFolder, objectElement) {
  if (Object.values(currentFolder).includes(objectElement)) {
    selectedObject = rootFolder;
    return;
  }

  for (const task of currentFolder.taskArr) {
    if (Object.values(task).includes(objectElement)) {
      selectedObject = task;
      return;
    }
  }

  for (const folder of currentFolder.folderArr) {
    if (Object.values(folder).includes(objectElement)) {
      selectedObject = folder;
      return;
    }
    assignSelectedObject(folder, objectElement);
  }
}

function changeCompletionStatus(task, taskCheckmark) {
  task.isComplete ? (task.isComplete = false) : (task.isComplete = true);

  object.isComplete
    ? taskCheckmark.classList.add("taskComplete")
    : taskCheckmark.classList.remove("taskComplete");
}

function deleteObject(object, objectType) {
  const confirmString = "Are you sure you want to delete this";

  if (objectType === "task" && confirm(`${confirmString} task?`)) {
    const index = object.parent.taskArr.indexOf(object);
    object.parent.taskArr.splice(index, 1);
    taskContainer.removeChild(object.element);
  } else if (objectType === "folder" && confirm(`${confirmString} folder?`)) {
    const index = object.parent.folderArr.indexOf(object);
    object.parent.folderArr.splice(index, 1);
    folderContainer.removeChild(object.element);
  }
}

export {
  rootFolder,
  setActiveFolder,
  getActiveFolder,
  getSelectedObject,
  changeCompletionStatus,
  deleteObject,
};
