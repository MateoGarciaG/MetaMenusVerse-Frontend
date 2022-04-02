import "./groupCard.module.scss";
import { Card } from "../card/card";

import groupCardHtml from "./groupCard.html?raw";
import "./groupCard.module.scss";
import { html, render } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { Pagination } from "../pagination/pagination";

let cards = [
  Card({
    _id: "619fe741677c4063bb6d2f41",
    title: "Pizza Vegana",
    descriptionMenu: "Un poquito de Italia por todo el universo",
    stock: 70,
    price: 35.99,
    ingredients: [
      {
        _id: "61d35abc6abe3143b2703996",
        name: "Masa de Milán",
        origin: "Planeta Tierra",
        price: 12,
      },
      {
        _id: "61d35abc6abe3143b2703998",
        name: "Queso de no oveja",
        origin: "Planeta Tierra",
        price: 6.5,
      },
      {
        _id: "61d35abc6abe3143b2703997",
        name: "Tomate de Ourense",
        origin: "Planeta Tierra",
        price: 24.6,
      },
    ],
    category: {
      _id: "61d2f6dffe41de923a91f186",
      title: "ComidaVeganaIntergalactica",
      description:
        "Prepare for those people who respect the conservation and life of species around the universe",
    },
    state: {
      energy: 5,
      radiation: 130,
      toxicity: 5,
    },
  }),
  Card({
    _id: "619fe741677c4063bb6d2f41",
    title: "Pizza Vegana",
    descriptionMenu: "Un poquito de Italia por todo el universo",
    stock: 70,
    price: 35.99,
    ingredients: [
      {
        _id: "61d35abc6abe3143b2703996",
        name: "Masa de Milán",
        origin: "Planeta Tierra",
        price: 12,
      },
      {
        _id: "61d35abc6abe3143b2703998",
        name: "Queso de no oveja",
        origin: "Planeta Tierra",
        price: 6.5,
      },
      {
        _id: "61d35abc6abe3143b2703997",
        name: "Tomate de Ourense",
        origin: "Planeta Tierra",
        price: 24.6,
      },
    ],
    category: {
      _id: "61d2f6dffe41de923a91f186",
      title: "ComidaVeganaIntergalactica",
      description:
        "Prepare for those people who respect the conservation and life of species around the universe",
    },
    state: {
      energy: 5,
      radiation: 130,
      toxicity: 5,
    },
  }),
  Card({
    _id: "619fe741677c4063bb6d2f41",
    title: "Pizza Vegana",
    descriptionMenu: "Un poquito de Italia por todo el universo",
    stock: 70,
    price: 35.99,
    ingredients: [
      {
        _id: "61d35abc6abe3143b2703996",
        name: "Masa de Milán",
        origin: "Planeta Tierra",
        price: 12,
      },
      {
        _id: "61d35abc6abe3143b2703998",
        name: "Queso de no oveja",
        origin: "Planeta Tierra",
        price: 6.5,
      },
      {
        _id: "61d35abc6abe3143b2703997",
        name: "Tomate de Ourense",
        origin: "Planeta Tierra",
        price: 24.6,
      },
    ],
    category: {
      _id: "61d2f6dffe41de923a91f186",
      title: "ComidaVeganaIntergalactica",
      description:
        "Prepare for those people who respect the conservation and life of species around the universe",
    },
    state: {
      energy: 5,
      radiation: 130,
      toxicity: 5,
    },
  }),
  Card({
    _id: "619fe741677c4063bb6d2f41",
    title: "Pizza Vegana",
    descriptionMenu: "Un poquito de Italia por todo el universo",
    stock: 70,
    price: 35.99,
    ingredients: [
      {
        _id: "61d35abc6abe3143b2703996",
        name: "Masa de Milán",
        origin: "Planeta Tierra",
        price: 12,
      },
      {
        _id: "61d35abc6abe3143b2703998",
        name: "Queso de no oveja",
        origin: "Planeta Tierra",
        price: 6.5,
      },
      {
        _id: "61d35abc6abe3143b2703997",
        name: "Tomate de Ourense",
        origin: "Planeta Tierra",
        price: 24.6,
      },
    ],
    category: {
      _id: "61d2f6dffe41de923a91f186",
      title: "ComidaVeganaIntergalactica",
      description:
        "Prepare for those people who respect the conservation and life of species around the universe",
    },
    state: {
      energy: 5,
      radiation: 130,
      toxicity: 5,
    },
  }),
  Card({
    _id: "619fe741677c4063bb6d2f41",
    title: "Pizza Vegana",
    descriptionMenu: "Un poquito de Italia por todo el universo",
    stock: 70,
    price: 35.99,
    ingredients: [
      {
        _id: "61d35abc6abe3143b2703996",
        name: "Masa de Milán",
        origin: "Planeta Tierra",
        price: 12,
      },
      {
        _id: "61d35abc6abe3143b2703998",
        name: "Queso de no oveja",
        origin: "Planeta Tierra",
        price: 6.5,
      },
      {
        _id: "61d35abc6abe3143b2703997",
        name: "Tomate de Ourense",
        origin: "Planeta Tierra",
        price: 24.6,
      },
    ],
    category: {
      _id: "61d2f6dffe41de923a91f186",
      title: "ComidaVeganaIntergalactica",
      description:
        "Prepare for those people who respect the conservation and life of species around the universe",
    },
    state: {
      energy: 5,
      radiation: 130,
      toxicity: 5,
    },
  }),
  Card({
    _id: "619fe741677c4063bb6d2f41",
    title: "Pizza Vegana",
    descriptionMenu: "Un poquito de Italia por todo el universo",
    stock: 70,
    price: 35.99,
    ingredients: [
      {
        _id: "61d35abc6abe3143b2703996",
        name: "Masa de Milán",
        origin: "Planeta Tierra",
        price: 12,
      },
      {
        _id: "61d35abc6abe3143b2703998",
        name: "Queso de no oveja",
        origin: "Planeta Tierra",
        price: 6.5,
      },
      {
        _id: "61d35abc6abe3143b2703997",
        name: "Tomate de Ourense",
        origin: "Planeta Tierra",
        price: 24.6,
      },
    ],
    category: {
      _id: "61d2f6dffe41de923a91f186",
      title: "ComidaVeganaIntergalactica",
      description:
        "Prepare for those people who respect the conservation and life of species around the universe",
    },
    state: {
      energy: 5,
      radiation: 130,
      toxicity: 5,
    },
  }),
  Card({
    _id: "619fe741677c4063bb6d2f41",
    title: "Pizza Vegana",
    descriptionMenu: "Un poquito de Italia por todo el universo",
    stock: 70,
    price: 35.99,
    ingredients: [
      {
        _id: "61d35abc6abe3143b2703996",
        name: "Masa de Milán",
        origin: "Planeta Tierra",
        price: 12,
      },
      {
        _id: "61d35abc6abe3143b2703998",
        name: "Queso de no oveja",
        origin: "Planeta Tierra",
        price: 6.5,
      },
      {
        _id: "61d35abc6abe3143b2703997",
        name: "Tomate de Ourense",
        origin: "Planeta Tierra",
        price: 24.6,
      },
    ],
    category: {
      _id: "61d2f6dffe41de923a91f186",
      title: "ComidaVeganaIntergalactica",
      description:
        "Prepare for those people who respect the conservation and life of species around the universe",
    },
    state: {
      energy: 5,
      radiation: 130,
      toxicity: 5,
    },
  }),
  Card({
    _id: "619fe741677c4063bb6d2f41",
    title: "Pizza Vegana",
    descriptionMenu: "Un poquito de Italia por todo el universo",
    stock: 70,
    price: 35.99,
    ingredients: [
      {
        _id: "61d35abc6abe3143b2703996",
        name: "Masa de Milán",
        origin: "Planeta Tierra",
        price: 12,
      },
      {
        _id: "61d35abc6abe3143b2703998",
        name: "Queso de no oveja",
        origin: "Planeta Tierra",
        price: 6.5,
      },
      {
        _id: "61d35abc6abe3143b2703997",
        name: "Tomate de Ourense",
        origin: "Planeta Tierra",
        price: 24.6,
      },
    ],
    category: {
      _id: "61d2f6dffe41de923a91f186",
      title: "ComidaVeganaIntergalactica",
      description:
        "Prepare for those people who respect the conservation and life of species around the universe",
    },
    state: {
      energy: 5,
      radiation: 130,
      toxicity: 5,
    },
  }),
  Card({
    _id: "619fe741677c4063bb6d2f41",
    title: "Pizza Vegana",
    descriptionMenu: "Un poquito de Italia por todo el universo",
    stock: 70,
    price: 35.99,
    ingredients: [
      {
        _id: "61d35abc6abe3143b2703996",
        name: "Masa de Milán",
        origin: "Planeta Tierra",
        price: 12,
      },
      {
        _id: "61d35abc6abe3143b2703998",
        name: "Queso de no oveja",
        origin: "Planeta Tierra",
        price: 6.5,
      },
      {
        _id: "61d35abc6abe3143b2703997",
        name: "Tomate de Ourense",
        origin: "Planeta Tierra",
        price: 24.6,
      },
    ],
    category: {
      _id: "61d2f6dffe41de923a91f186",
      title: "ComidaVeganaIntergalactica",
      description:
        "Prepare for those people who respect the conservation and life of species around the universe",
    },
    state: {
      energy: 5,
      radiation: 130,
      toxicity: 5,
    },
  }),
  Card({
    _id: "619fe741677c4063bb6d2f41",
    title: "Pizza Vegana",
    descriptionMenu: "Un poquito de Italia por todo el universo",
    stock: 70,
    price: 35.99,
    ingredients: [
      {
        _id: "61d35abc6abe3143b2703996",
        name: "Masa de Milán",
        origin: "Planeta Tierra",
        price: 12,
      },
      {
        _id: "61d35abc6abe3143b2703998",
        name: "Queso de no oveja",
        origin: "Planeta Tierra",
        price: 6.5,
      },
      {
        _id: "61d35abc6abe3143b2703997",
        name: "Tomate de Ourense",
        origin: "Planeta Tierra",
        price: 24.6,
      },
    ],
    category: {
      _id: "61d2f6dffe41de923a91f186",
      title: "ComidaVeganaIntergalactica",
      description:
        "Prepare for those people who respect the conservation and life of species around the universe",
    },
    state: {
      energy: 5,
      radiation: 130,
      toxicity: 5,
    },
  }),

];

export const GroupCard = () => {
  const groupCard = document.querySelector("#groupCards");
  render(html`${unsafeHTML(groupCardHtml)}`, groupCard);

  const showCardsContainter = document.querySelector(".show-cards");

  // render(html`${cards.map((card) => unsafeHTML(card))}`, showCardsContainter);

  const paginationContainer = document.querySelector(".pagination-cards");

  Pagination(showCardsContainter, paginationContainer, cards);

  // return html`
  // ${unsafeHTML(groupCardHtml)}
  // `;
};
