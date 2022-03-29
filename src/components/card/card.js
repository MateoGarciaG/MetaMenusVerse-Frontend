// import template from "./card.html?raw";
import styles from "./card.module.scss";

export const Card = (nombre = "", precio = 0.0) => {
  const cardContainer = document.createElement("div");
  cardContainer.innerHTML = `
  <div class="${styles.card}">
    <h3 class="${styles.card__title}">
      CARD COMPONENT
    </h3>
    <ul>
      <li>
      ${nombre}
      </li>
      <li>
      ${precio}
      </li>
    </ul>
  </div>
  `;
  return cardContainer.innerHTML;

};
