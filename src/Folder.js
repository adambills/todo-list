import Task from "./Task.js";
import { setActiveFolder } from "./manageObjects.js";

export default class Folder {
  constructor(title, color/*, parentLevel*/) {
    this.title = title;
    this.color = color;
    //this.level = parentLevel + 1;
    this.folderArr = [];
    this.taskArr = [];
    this.element = document.createElement("div");
    this.element.addEventListener("click", setActiveFolder);
    this.element.classList.add("folder-element"); 
    this.element2 = document.createElement("div");
    this.element2.addEventListener("click", setActiveFolder);
    this.element2.classList.add("folder-element"); 
  }

  get numItems() {
    return this.taskArr.length;
  }

  addNewTask(title, dueDate, priority, description) {
    const newItem = new Task(title, dueDate, priority, description);
    this.taskArr.push(newItem);
    return newItem;
  }

  addNewFolder(title, description, color, parentLevel) {
    const newFolder = new Folder(title, description, color, parentLevel);
    this.folderArr.push(newFolder);
    //setParents(rootFolder);
    return newFolder;
  }

  removeItem(index) {
    if (index > -1) this.taskArr.splice(index, 1);
  }

  removeFolder(index) {
    if (index > -1) this.folderArr.splice(index, 1);
  }

};
