import Folder from "./Folder";
import renderActiveFolder from "./renderActiveFolder";

const rootFolder = new Folder("Root Folder", "blue" /*, -1*/);
let activeFolder = rootFolder;

function setParents(parentFolder) {
  const folderArr = parentFolder.folderArr;

  for (const folder of folderArr) {
    folder.parent = parentFolder;
    setParents(folder);
  }
}

function getActiveFolder() {
  return activeFolder;
}

function setActiveFolder(event) {
  const folderElement = event.target.closest(".folderElement");

  //recursive search through folders to find folder that was clicked
  //assign clicked folder as activeFolder
  assignClickedFolder(rootFolder, folderElement);
  
  const folderArr = activeFolder.folderArr;
  const taskArr = activeFolder.taskArr;
  renderActiveFolder(folderArr, taskArr);
}

function assignClickedFolder(currentFolder, folderElement) {
  if (Object.values(currentFolder).includes(folderElement)) {
    return rootFolder;
  }

  const folderArr = currentFolder.folderArr;

  for (const folder of folderArr) {
    if (Object.values(folder).includes(folderElement)) {
      activeFolder = folder;
      return;
    }
    assignClickedFolder(folder, folderElement);
  }
}

export { setParents, setActiveFolder, getActiveFolder };
