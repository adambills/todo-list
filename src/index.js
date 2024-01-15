import "./style.scss";
import { newFolder, newFolderDialog, newTask, newTaskDialog } from "./domCache";

activateDialogButton(newFolder, newFolderDialog);
activateDialogButton(newTask, newTaskDialog);

function activateDialogButton(button, dialog) {
    button.addEventListener('click', ()=> {
        dialog.showModal();
    });
}