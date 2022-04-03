import styles from "./card.module.scss";
import { createButtonCard } from "./scripts/button-card";
// import "./card.module.scss";
// import { cardEvents } from "/components/card/scripts/events";

export const Card = ({
  _id,
  title,
  descriptionMenu,
  stock,
  price,
  ingredients,
  category,
  state,
}, ) => {
  

  const cardContainer = document.createDocumentFragment();
  cardContainer.innerHTML = `
  <div class="col-lg-4 col-md-9 my-5 " data-wow-delay="0.1s">
    <div class="${styles["service-item-container"]}">
      <div class="${
        styles["service-item"]
      } d-flex flex-column justify-content-center text-center rounded">
        <div class="${styles["service-icon"]} flex-shrink-0">
          <img src="assets/images/card/icon_card.png" alt="icon-card">
        </div>
        <h5 class="mb-3">
          ${title}
        </h5>
        <p>
          <span>ID</span>: ${_id}
        </p>
        <p>
          <span>DESCRIPTION</span>: ${descriptionMenu}
        </p>
        <p>
          <span>STOCK</span>: ${stock}
        </p>
        <p>
          <span>PRICE</span>: ${price}
        </p>
        <p><span>INGREDIENTS</span>:</p>
        <ul>
          ${ingredients.map(
            (ingredient) => `
          <li>
            ${ingredient.name}
          </li>
          `
          )}
        </ul>
        <p>
          <span>CATEGORY</span>: ${category.title}
        </p>
        <p>
          <span>STATE:</span>
          Radiation: <span>${state.radiation}</span>
          Toxicity: <span>${state.toxicity}</span>
          Energy: <span>${state.energy}</span>
        </p>
        
      </div>
      <div class="${styles["json-card"]}">
        <pre>
          <span>
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
    ${createButtonCard("EDITAR").innerHTML}
    ${createButtonCard("ELIMINAR", "btn btn-outline-danger btn-lg").innerHTML}
    ${createButtonCard("COPY DATA", "btn btn-outline-success btn-lg").innerHTML}
    </div>
  </div>
  `;

  return cardContainer.innerHTML;
};
