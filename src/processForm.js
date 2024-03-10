import { getActiveFolder } from "./manageObjects";
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
    folder.parent = activeFolder;

    renderFolder(folder);
  } else {
    activeFolder.addNewTask(...values);
    const taskArr = activeFolder.taskArr;
    const index = taskArr.length - 1;
    const task = taskArr[index];
    task.parent = activeFolder;

    renderTask(task);

    const taskCheckmark = task.element.querySelector(".taskCheckmark");

    taskCheckmark.addEventListener("click", (e) => {
      e.stopPropagation();
      task.changeCompletionStatus();
      task.isComplete
        ? taskCheckmark.classList.add("taskComplete")
        : taskCheckmark.classList.remove("taskComplete");
    });
  }
}
