import renderTaskDialog from "./renderTaskDialog";

export default class Task {
  constructor(title, dueDate, priority, description) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.description = description;
    this.isComplete = false;
    this.element = document.createElement("div");
    this.element.classList.add("task-element");
    this.element.addEventListener('click', renderTaskDialog);
  }

  changeCompletionStatus() {
    this.isComplete ? this.isComplete = false : this.isComplete = true;
  }
}
