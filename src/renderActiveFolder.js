import { renderFolder, renderTask } from "./renderObjects";
import { folderContainer, taskContainer } from "./domCache";

export default function renderActiveFolder(folderArr, taskArr) {
  const folderElements = [...folderContainer.querySelectorAll(".folderElement")];
  const taskElements = [...taskContainer.querySelectorAll(".taskElement")];
  const allElements = folderElements.concat(taskElements);

  for (const element of allElements) {
    //if (element.firstChild) element.removeChild(element.firstChild);
    if (element) element.parentNode.removeChild(element);
  }

  for (const folder of folderArr) {
    renderFolder(folder);
  }

  for (const task of taskArr) {
    renderTask(task);
  }
}


