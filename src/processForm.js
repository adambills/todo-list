import { getActiveFolder } from "./manageFolders";
import { getInputArr } from "./domCache";
import { renderNewFolder, renderNewTask } from "./render";

export default function processForm(form) {
  const activeFolder = getActiveFolder();
  const values = [];
  const inputArr = getInputArr(form);

  for (const input of inputArr) {
    values.push(input.value);
  }

  if (form.getAttribute("class") === "folder-form") {
    activeFolder.addNewFolder(...values);
    renderNewFolder();
  } else {
    activeFolder.addNewTask(...values);
    renderNewTask();
  }
}
