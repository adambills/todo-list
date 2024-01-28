import "./style.scss";
import { newFolder, newFolderDialog, newTask, newTaskDialog, closeDialogBtns } from "./domCache";

newTaskDialog.showModal();

activateDialog(newFolder, newFolderDialog);
activateDialog(newTask, newTaskDialog);

function activateDialog(button, dialog) {
    button.addEventListener('click', ()=> {
        dialog.showModal();
    });
}

for (const button of [...closeDialogBtns]) {
    const dialog = button.closest('dialog');
    button.addEventListener('click', () => {
        dialog.close();
    })
}