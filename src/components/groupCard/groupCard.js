import "./groupCard.module.scss";
import { Card } from "../card/card";

import groupCardHtml from "./groupCard.html?raw";
import "./groupCard.module.scss";
import { html, render } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { Pagination } from "../pagination/pagination";
import { allMenus as cardsMenus } from "/services/gateways/menu.service";

export const GroupCard = () => {
  const groupCard = document.querySelector("#groupCards");
  render(html`${unsafeHTML(groupCardHtml)}`, groupCard);

  const showCardsContainter = document.querySelector(".show-cards");

  const paginationContainer = document.querySelector(".pagination-cards");

  async function insertDataPagination() {
    const data = await cardsMenus();

    Pagination(showCardsContainter, paginationContainer, data.map(menu => Card(menu)));
  }

  insertDataPagination();

};


