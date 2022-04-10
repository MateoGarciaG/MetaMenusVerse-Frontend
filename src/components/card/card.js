import styles from "./card.module.scss";
import { validateMenuArgs } from "/models/menu/menu.model";
import { html } from "lit-html";
import { cardEvents } from "./scripts/events";

export const Card = ({
  _id,
  title,
  descriptionMenu,
  stock,
  price,
  ingredients,
  category,
  state,
}) => {
  // Call validator PropTypes Menu
  validateMenuArgs({
    title,
    descriptionMenu,
    stock,
    price,
    ingredients,
    category,
    state,
  });

  return html`
    <div class="col-lg-4 col-md-9 my-5 " data-wow-delay="0.1s">
      <div class="${styles["service-item-container"]}" id="${_id}">
        <div
          class="${styles[
            "service-item"
          ]} d-flex flex-column justify-content-center text-center rounded"
        >
          <div class="${styles["service-icon"]} flex-shrink-0">
            <img src="assets/images/card/icon_card.png" alt="icon-card" />
          </div>
          <h5 class="mb-3 title">${title}</h5>
          <p>
            <span>ID</span>:
            <span class="${styles["service-item__value"]} ">${_id}</span>
          </p>
          <p>
            <span>DESCRIPTION</span>:
            <span class="${styles["service-item__value"]} descriptionMenu "
              >${descriptionMenu}</span
            >
          </p>
          <p>
            <span>STOCK</span>:
            <span class="${styles["service-item__value"]} stock "
              >${stock}</span
            >
          </p>
          <p>
            <span>PRICE</span>:
            <span class="${styles["service-item__value"]} price "
              >${price}</span
            >
          </p>
          <p><span>INGREDIENTS</span>:</p>
          <ul>
            ${ingredients.map(
              (ingredient) => html`
                <li class=" ingredient">${ingredient.name}</li>
              `
            )}
          </ul>
          <p>
            <span>CATEGORY</span>:
            <span class="${styles["service-item__value"]} category"
              >${category.title}</span
            >
          </p>
          <p>
            <span>STATE:</span>
            Radiation:
            <span class="radiation ">${state.radiation}</span> Toxicity:
            <span class="toxicity ">${state.toxicity}</span> Energy:
            <span class="energy ">${state.energy}</span>
          </p>
        </div>
        <div class="${styles["json-card"]}">
          <pre>
        <span class="code-content">
<br>
{
  "_id": ${_id},
  "title": ${title},
  "descriptionMenu": ${descriptionMenu},
  "stock": ${stock},
  "price": ${price},
  "ingredients": [${ingredients.map(
            (ingredient) => `
          {
            _id: ${ingredient._id}
          }`
          )}
  ],
  "category": {
        _id: ${category._id},
        title: ${category.title},
        description: ${category.description}
  },
  "state": {
        energy: ${state.energy},
        radiation: ${state.radiation},
        toxicity: ${state.toxicity}
    }
}
        </span>
      </pre>
        </div>
      </div>
      <div class="${styles["card-buttons"]}">
        <button
          @click=${cardEvents.onClickEdit}
          class="btn btn-outline-warning btn-lg editar"
          data-id-menu="${_id}"
        >
          EDITAR
        </button>
        <button
          @click=${cardEvents.onClickDelete}
          class="btn btn-outline-danger btn-lg eliminar"
          data-id-menu="${_id}"
        >
          ELIMINAR
        </button>
        <button
          @click=${cardEvents.onClickCopy}
          class="btn btn-outline-success btn-lg copiar"
          data-id-menu="${_id}"
        >
          COPY DATA
        </button>
      </div>
    </div>
  `;
};
