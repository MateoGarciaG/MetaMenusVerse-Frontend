import editFormHtml from "./editForm.html?raw";
import "./editForm.module.scss";
import { html, render } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { repeat } from "lit-html/directives/repeat.js";
import { allIngredients as ingredients } from "/services/gateways/ingredients.service";
import { allCategories as categories } from "/services/gateways/categories.service";
import { formEditEvents } from "/components/editForm/scripts/events"

export const EditForm = () => {
  const editForm = document.createDocumentFragment();
  editForm.innerHTML = editFormHtml;

  const editFormContainer = document.querySelector("#editFormContainer");
  render(html`${unsafeHTML(editFormHtml)}`, editFormContainer);

  const categorySelect = document.querySelector("#actualizarCategory");

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

  const multiSelect = document.querySelector("#actualizarIngredients");

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

  const formCreation = document.querySelector("#actualizarForm");

  formEditEvents.onSubmit(formCreation);
};
