const newFolder = document.querySelector("#new-folder");
const newTask = document.querySelector("#new-task");
const newFolderDialog = document.querySelector("#new-folder-dialog");
const newTaskDialog = document.querySelector("#new-task-dialog");
const closeDialogBtns = document.querySelectorAll('.closeDialog');
const forms = document.querySelectorAll('form');

function getInputs(form) {
    const inputs = form.querySelectorAll('input');
    const inputArr = [...inputs];
    const textarea = form.querySelector('textarea');
    
    if (textarea) {
        inputArr.push(textarea);
    }

    for (let i = 0; i < inputArr.length; i++) {
        if (
            inputArr[i].getAttribute('type') === 'radio' && 
            !inputArr[i].getAttribute('checked')
        ) {
            inputArr.splice(i,1);
        }
    }

    return inputArr;
}

export  { newFolder, newTask, newFolderDialog, newTaskDialog, closeDialogBtns, forms, getInputs };
