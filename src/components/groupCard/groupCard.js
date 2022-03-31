import "./groupCard.module.scss";
import { Card } from "../card/card";

let cards = [Card("Pedro", 27.3), Card("MArio", 12.3), Card("MArio", 12.3), ];

export const GroupCard = () => {
  const groupCard = document.createDocumentFragment();
  groupCard.innerHTML = `
  <!-- Service Start -->
  <div class="container-xxl py-5 groupCards">
    <div class="container px-lg-8">
      <div
        class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <h6 class="position-relative d-inline text-primary ps-4 display-2">Our Menus</h6>
        <h2 class="mt-2">Obtain data for your app </h2>
      </div>
      <div class="row g-4 d-flex justify-content-center cards__container">
      ${cards.map((card) => card)}
      </div>
    </div>
  </div>
<!-- Service End -->

  
  `;

  return groupCard.innerHTML;
};
