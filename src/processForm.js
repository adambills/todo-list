import { getActiveFolder } from "./manageFolders";
import { getInputArr } from "./domCache";
import { renderFolder, renderTask } from "./renderObjects";

export default function processForm(form) {
  const activeFolder = getActiveFolder();
  const values = [];
  const inputArr = getInputArr(form);

  for (const input of inputArr) {
    values.push(input.value);
  }

  if (form.getAttribute("class") === "folder-form") {
    activeFolder.addNewFolder(...values);
    const folderArr = activeFolder.folderArr;
    const index = folderArr.length - 1;
    const folder = folderArr[index];

    renderFolder(folder);

  } else {
    activeFolder.addNewTask(...values);
    const taskArr = activeFolder.taskArr;
    const index = taskArr.length - 1;
    const task = taskArr[index];

    renderTask(task);
    
  }
}
