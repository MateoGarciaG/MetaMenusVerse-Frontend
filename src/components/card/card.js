import jsonCard from "./card-json.html?raw";
import styles from "./card.module.scss";
// import "./card.module.scss";


export const Card = (nombre = "", precio = 0.0) => {
  const cardContainer = document.createDocumentFragment();
  cardContainer.innerHTML = `
  <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
    <div class="${styles["service-item"]} d-flex flex-column justify-content-center text-center rounded">
      <div class="${styles["service-icon"]} flex-shrink-0">
          <i class="fa fa-home fa-2x"></i>
      </div>
        <h5 class="mb-3">
          ${nombre}
        </h5>
        <p>
        ${precio}
        </p>
        <a href="" class="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
    </div>
  </div>
  `;
  cardContainer.innerHTML += jsonCard;
  return cardContainer.innerHTML;

};
