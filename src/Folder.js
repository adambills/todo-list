import Task from "./Task.js";
import { setParents, setActiveFolder, selectFolder } from "./manageFolders.js";

export default class Folder {
  constructor(title, color/*, parentLevel*/) {
    this.title = title;
    this.color = color;
    //this.level = parentLevel + 1; // private
    this.folderArr = []; // private
    this.taskArr = []; // private
    this.element = document.createElement("div");
    this.element.addEventListener("click", setActiveFolder);
    this.element.classList.add("folderElement"); 
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
