export default class Task {
  constructor(title, dueDate, priority, description) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.description = description;
    this.isComplete = false;
    this.element = document.createElement("div");
    this.element.classList.add("taskElement");
  }

  changeProperty(property, newValue) {
    this[property] = newValue;
  }
}
