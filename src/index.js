import "./style.scss";
import {
  newFolder,
  newFolderDialog,
  newTask,
  newTaskDialog,
  closeDialogBtns,
  forms,
  getInputs
} from "./domCache";
import { getActiveFolder } from "./manageFolders";

activateDialog(newFolder, newFolderDialog);
activateDialog(newTask, newTaskDialog);

function activateDialog(button, dialog) {
  button.addEventListener("click", () => {
    dialog.showModal();
  });
}

for (const button of [...closeDialogBtns]) {
  const dialog = button.closest("dialog");
  button.addEventListener("click", () => {
    dialog.close();
  });
}

for (const form of [...forms]) {
  const dialog = form.closest("dialog");

  form.addEventListener("submit", (e) => {
    dialog.close();
    e.preventDefault();
    processForm(form);
  });
}

function processForm(form) {
  const activeFolder = getActiveFolder();
  const values = [];
  const inputArr = getInputs(form);

  for (const input of inputArr) {
    values.push(input.value);
  }

  if (form.getAttribute("class") === "folder-form") {
    activeFolder.addNewFolder(...values);
    console.log(activeFolder.folderArr);
  } else {
    activeFolder.addNewTask(...values);
    console.log(activeFolder.taskArr);
  }
}
