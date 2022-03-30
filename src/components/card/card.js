// import template from "./card.html?raw";
import styles from "./card.module.scss";

export const Card = (nombre = "", precio = 0.0) => {
  const cardContainer = document.createDocumentFragment();
  cardContainer.innerHTML = `
  <div class="card ${styles.card}" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title ${styles.card__title}">${nombre}</h5>
    <p class="card-text"> ${precio} </p>
    <a href="#" class="btn btn-primary">Obtener código</a>
  </div>
</div>
  `;
  return cardContainer.innerHTML;

};
