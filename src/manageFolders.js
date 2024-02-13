import Folder from "./Folder";
import renderActiveFolder from "./renderActiveFolder";
import { header } from "./domCache";

const rootFolder = new Folder("Home", "blue" /*, -1*/);
let activeFolder = rootFolder;

// function setParents(parentFolder) {
//   const folderArr = parentFolder.folderArr;

//   for (const folder of folderArr) {
//     folder.parent = parentFolder;
//     setParents(folder);
//   }
// }

function getActiveFolder() {
  return activeFolder;
}

function setActiveFolder(event) {
  const folderElement = event.target.closest(".folder-element");

  assignClickedFolder(rootFolder, folderElement);
  
  header.innerText = activeFolder.title;
  const folderArr = activeFolder.folderArr;
  const taskArr = activeFolder.taskArr;
  renderActiveFolder(activeFolder, folderArr, taskArr);
}

function assignClickedFolder(currentFolder, folderElement) {
  if (Object.values(currentFolder).includes(folderElement)) {
    return rootFolder;
  }

  for (const folder of currentFolder.folderArr) {
    if (Object.values(folder).includes(folderElement)) {
      activeFolder = folder;
      return;
    }
    assignClickedFolder(folder, folderElement);
  }
}

export { rootFolder, setActiveFolder, getActiveFolder };
