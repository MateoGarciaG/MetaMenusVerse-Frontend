import addFormHtml from "./addForm.html?raw";
import "./addForm.module.scss";
import { html, render } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { repeat } from "lit-html/directives/repeat.js";
import { allIngredients as ingredients } from "/services/gateways/ingredients.service";
import { allCategories as categories } from "/services/gateways/categories.service";
import { formAddEvents } from "/components/addForm/scripts/events"

export const AddForm = () => {
  const addForm = document.createDocumentFragment();
  addForm.innerHTML = addFormHtml;

  const addFormContainer = document.querySelector("#addFormContainer");
  render(html`${unsafeHTML(addFormHtml)}`, addFormContainer);

  const categorySelect = document.querySelector("#category");

  async function addCategoriesInSelect() {
    const data = await categories();

    render(
      html`
        ${repeat(
          data.map((c) => c.title),
          (category) => category.id,
          (category) =>
            html`<option value="${category}">
              ${category.replace(/([A-Z])/g, " $1").trim()}
            </option>`
        )}
      `,
      categorySelect
    );
  }

  addCategoriesInSelect();

  const multiSelect = document.querySelector("#ingredients");

  async function addMultiselectValues() {
    const data = await ingredients();

    render(
      html`
        ${repeat(
          data.map((i) => i.name),
          (ingredient) => ingredient.id,
          (ingredient) =>
            html`<option value="${ingredient}">${ingredient}</option>`
        )}
      `,
      multiSelect
    );
  }

  addMultiselectValues();

  const formCreation = document.querySelector("#agregarFormulario");

  formAddEvents.onSubmit(formCreation);
};
