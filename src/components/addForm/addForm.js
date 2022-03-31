import addFormHtml from "./addForm.html?raw";
import "./addForm.module.scss";
import { html } from 'lit-html';
import { unsafeHTML} from 'lit-html/directives/unsafe-html.js';

export const AddForm = () => {
  const addForm = document.createDocumentFragment();
  addForm.innerHTML = addFormHtml;

  return html`
  ${unsafeHTML(addFormHtml)}
  `;

};

export const addMenu = () => {
  document.getElementById("name").value = "Mateo";
}