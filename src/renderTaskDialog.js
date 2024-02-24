import { taskDialog, dialogTaskTitle, dialogTaskDueDate, dialogTaskDescription, dialogTaskPriority } from "./domCache";
import { getSelectedObject } from "./manageObjects";

export default function renderTaskDialog() {
  const task = getSelectedObject(this);

  dialogTaskTitle.innerText = task.title;
  dialogTaskDueDate.innerText = task.dueDate;
  dialogTaskDescription.innerText = task.description;
  switch (task.priority) {
    case "low":
      dialogTaskPriority.setAttribute("fill", "yellow");
      break;
    case "medium":
      dialogTaskPriority.setAttribute("fill", "orange");
      break;
    case "high":
      dialogTaskPriority.setAttribute("fill", "red");
      break;
  }

  taskDialog.showModal();
}
