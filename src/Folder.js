import TodoItem from "./TodoItem.js";
import { setParents, setActiveFolder } from "./manageFolders.js";

export default class Folder {
  constructor(title, description, color, parentLevel) {
    this.title = title;
    this.description = description; // set () { render() }
    this.color = color;
    this.level = parentLevel + 1; // private
    this.folderArr = []; // private
    this.itemArr = []; // private
    this.element = document.createElement("div");
    folder.element.addEventListener("click", setActiveFolder);
    folder.element.classList.add("folderDiv");
  }

  get numItems() {
    return this.itemArr.length;
  }

  addNewItem(title, description, dueDate, priority) {
    const newItem = new TodoItem(title, description, dueDate, priority);
    this.itemArr.push(newItem);
    return newItem;
  }

  addNewFolder(title, description, color, parentLevel) {
    const newFolder = new Folder(title, description, color, parentLevel);
    this.folderArr.push(newFolder);
    //setParents(rootFolder);
    return newFolder;
  }

  removeItem(index) {
    if (index > -1) this.itemArr.splice(index, 1);
  }

  removeFolder(index) {
    if (index > -1) this.folderArr.splice(index, 1);
  }

};
