import "./style.scss";
import Folder from "./Folder.js";

const mainFolder = new Folder("Main Folder", "Root Folder", "blue", -1);
let activeFolder = mainFolder;

const folder2 = mainFolder.addNewFolder(
  "Folder 2",
  "Folder 2 Description",
  "red",
  activeFolder.level
);
const folder3 = mainFolder.addNewFolder(
  "Folder 3",
  "Folder 3 Description",
  "purple",
  activeFolder.level
);
const item1 = mainFolder.addNewItem(
  "Test Item 1",
  "Description!",
  "Tomorrow",
  "High"
);
const item2 = mainFolder.folderArr[1].addNewItem(
  "Test Item 2",
  "Description! Inside Folder 3!",
  "Next Year",
  "Low"
);
const folder4 = mainFolder.folderArr[1].addNewFolder(
  "Folder 4",
  "A Folder Inside Folder 3!",
  "green",
  mainFolder.folderArr[1].level
);

const body = document.querySelector("body");

mainFolder.folderArr.forEach((folder) => {
  folder.element.addEventListener("click", (event) =>
    console.dir(event.target)
  );
  folder.element.classList.add("folderDiv");
  body.appendChild(folder.element);
});


// set active folder
// activeFolder.addNewItem();
// activeFolder.addNewFolder();
// render UI element of folder structure
// ability to click on folder structure to move between folders
// back button to go up one level
// back button to go back to main
// activeFolder.removeItem(index);
// activeFolder.removeFolder(index);
// render(activeFolder);
