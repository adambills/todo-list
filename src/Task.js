export default class Task {
    constructor(title, dueDate, priority, description) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.description = description;
        this.isComplete = false;
    }

    changeProperty(property, newValue) {
        this[property] = newValue;
    }


}