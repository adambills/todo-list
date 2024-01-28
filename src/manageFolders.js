import Folder from "./Folder";

const rootFolder = new Folder("Root Folder", "blue"/*, -1*/);
let activeFolder = rootFolder;
// render(activeFolder);

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
  activeFolder = getSelectedFolder(rootFolder, event);
  // render(activeFolder);
}

function getSelectedFolder(currentFolder, event) {
  if (Object.values(currentFolder).includes(event.target)) {
    return currentFolder;
  } 

  const folderArr = currentFolder.folderArr;

  for (const folder of folderArr) {
    if (Object.values(folder).includes(event.target)) {
      console.log(folder);
      return folder;
    }
    getSelectedFolder(folder, event);
  }
}

export { setParents, setActiveFolder, getActiveFolder, Folder };
