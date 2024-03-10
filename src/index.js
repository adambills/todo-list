import "./style.scss";
import {
  newFolderBtn,
  newFolderDialog,
  newTaskBtn,
  newTaskDialog,
  closeDialogBtns,
  taskCheckmark,
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


/* 
-Mark tasks as complete
-Edit/delete folders/tasks
-Use date-fns library for date formatting
-Use Web Storage API

-Move folders/tasks to different folder
-Ability to move/delete multiple objects at once
-Navigation tree for moving to any folder from anywhere (maybe have tree drop down from chevron icons)
-A page that allows you to view all tasks, not just current folder's tasks 
-Filter/sort tasks by different conditions (completion status, priority, alphabetical, etc.)
-Add more formatting options to task description/notes (checklist, bold, italic, bullets, alignment, font size, highlight, etc.)
  -Quilljs.com rich text editing API
-Change pointer style on hover
-Add animations
-Fine tune style
*/