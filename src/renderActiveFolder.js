import { renderFolder, renderTask } from "./renderObjects";
import { folderContainer, taskContainer } from "./domCache";
import { renderFolderLinks } from "./renderFolderLinks";

export default function renderActiveFolder(activeFolder, folderArr, taskArr) {
  const folderElements = [...folderContainer.querySelectorAll(".folder-element")];
  const taskElements = [...taskContainer.querySelectorAll(".task-element")];
  const allElements = folderElements.concat(taskElements);

  for (const element of allElements) {
    if (element.firstChild) element.removeChild(element.firstChild);
    if (element) element.parentNode.removeChild(element);
  }

  renderFolderLinks(activeFolder);

  for (const folder of folderArr) {
    renderFolder(folder);
  }

  for (const task of taskArr) {
    renderTask(task);
  }

  
}


