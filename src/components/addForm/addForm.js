import addFormHtml from "./addForm.html?raw";
import "./addForm.module.scss";
import { html, render } from 'lit-html';
import { unsafeHTML} from 'lit-html/directives/unsafe-html.js';

export const AddForm = () => {
  const addForm = document.createDocumentFragment();
  addForm.innerHTML = addFormHtml;

  const addFormContainer = document.querySelector("#addFormContainer");
  render(html`${unsafeHTML(addFormHtml)}`, addFormContainer)

  // addMenu();

};

const addMenu = () => {
  document.getElementById("name").value = "Mateo";
}