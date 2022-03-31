import "./groupCard.module.scss";
import { Card } from "../card/card";


import groupCardHtml from "./groupCard.html?raw";
import "./groupCard.module.scss";
import { html, render } from 'lit-html';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

let cards = [Card("Pedro", 27.3), Card("MArio", 12.3), Card("MArio", 12.3), ];


export const GroupCard = () => {

  const groupCard = document.querySelector("#groupCards");
  render(html`${unsafeHTML(groupCardHtml)}`, groupCard)

  const showCardsContainter = document.querySelector(".show-cards");

  render(html`${cards.map((card) => unsafeHTML(card))}`, showCardsContainter);

  // return html`
  // ${unsafeHTML(groupCardHtml)}
  // `;

};