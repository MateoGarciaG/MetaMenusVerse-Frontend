import paginationHtml from "./pagination.html?raw";
import "./pagination.module.scss"; // HMR
import { html, render } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { repeat } from "lit-html/directives/repeat.js";

export const Pagination = (
  cardsContainer,
  paginationContainer,
  cards = [],
  numberPerPage = 6,
  pageNumber = 1
) => {
  const generatePagination = () => {
    const start = numberPerPage * (pageNumber - 1);
    const end = start + numberPerPage;

    const size = cards.length;

    return {
      paginatedItems: cards.slice(start, end),
      numberOfPages: Math.ceil(size / numberPerPage),
      currentPage: pageNumber,
      dataLength: size,
    };
  };

  render(html`${unsafeHTML(paginationHtml)}`, paginationContainer);

  console.log(generatePagination());

  const numbersContainer = document.querySelector(".paginationNumbers");

  render(
    html`${generatePagination().paginatedItems.map((card) => card)}`,
    cardsContainer
  );

  const numberOfPagesHtml = [
    ...Array(generatePagination().numberOfPages).keys(),
  ];

  render(
    html`${repeat(
      numberOfPagesHtml,
      (number) => number.id,
      (number) => html`<li class="page-item ">
        <span class="page-link number-page-${number + 1}">${number + 1}</span>
      </li>`
    )}`,
    numbersContainer
  );

  numberOfPagesHtml.forEach((number) => {
    document
      .querySelector(`.number-page-${number + 1}`)
      .addEventListener("click", function () {
        pageNumber = number + 1;

        render(
          html`${generatePagination().paginatedItems.map((card) => card)}`,
          cardsContainer
        );
      });
  });
};
