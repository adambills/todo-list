import { rootFolder } from "./manageObjects";
import {
  folderLinkContainer,
  folderLinkTemplate,
  linkDividerTemplate,
} from "./domCache";

function renderFolderLinks(folder) {
  const folderElement = folder.element2;

  while (folderElement.firstChild) {
    folderElement.removeChild(folderElement.lastChild);
  }

  while (folderLinkContainer.lastChild !== rootFolder.element2) {
    folderLinkContainer.removeChild(folderLinkContainer.lastChild);
  }

  if (folder !== rootFolder) {
    renderFolderLinks(folder.parent);
    renderLink(folder, folderElement, true);
  } else {
    renderRootLink();
  }
}

function renderRootLink() {
  const folderElement = rootFolder.element2;

  renderLink(rootFolder, folderElement, false);
}

function renderLink(folder, folderElement, useDivider) {
  const linkDividerClone = linkDividerTemplate.cloneNode(true);
  linkDividerClone.classList.remove("template");
  const folderLinkClone = folderLinkTemplate.cloneNode(true);
  folderLinkClone.classList.remove("template");

  folderLinkClone.innerText = folder.title;

  if (useDivider) folderElement.appendChild(linkDividerClone);
  folderElement.appendChild(folderLinkClone);

  folderLinkContainer.appendChild(folderElement);
}

export { renderFolderLinks, renderRootLink };
