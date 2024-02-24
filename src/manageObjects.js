import Folder from "./Folder";
import renderActiveFolder from "./renderActiveFolder";
import { header } from "./domCache";

const rootFolder = new Folder("Home", "blue" /*, -1*/);
let activeFolder = rootFolder;
let selectedObject;

// function setParents(parentFolder) {
//   const folderArr = parentFolder.folderArr;

//   for (const folder of folderArr) {
//     folder.parent = parentFolder;
//     setParents(folder);
//   }
// }

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

// function assignClickedFolder(currentFolder, folderElement) {
//   if (Object.values(currentFolder).includes(folderElement)) {
//     activeFolder = rootFolder;
//     return;
//   }

//   for (const folder of currentFolder.folderArr) {
//     if (Object.values(folder).includes(folderElement)) {
//       activeFolder = folder;
//       return;
//     }
//     assignClickedFolder(folder, folderElement);
//   }
// }

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



export { rootFolder, setActiveFolder, getActiveFolder, getSelectedObject };
