import "./style.scss";
import {
  newFolderBtn,
  newFolderDialog,
  newTaskBtn,
  newTaskDialog,
  closeDialogBtns,
  forms,
} from "./domCache";
import processForm from "./processForm";
import { renderRootLink } from "./renderFolderLinks";

renderRootLink();

// activate buttons that show dialogs
activateDialog(newFolderBtn, newFolderDialog);
activateDialog(newTaskBtn, newTaskDialog);

function activateDialog(button, dialog) {
  button.addEventListener("click", () => dialog.showModal());
}

// activate close dialog buttons
for (const button of [...closeDialogBtns]) {
  const dialog = button.closest("dialog");
  button.addEventListener("click", () => dialog.close());
}

// process form submission
for (const form of [...forms]) {
  const dialog = form.closest("dialog");

  form.addEventListener("submit", (e) => {
    dialog.close();
    e.preventDefault();
    processForm(form);
  });
}
