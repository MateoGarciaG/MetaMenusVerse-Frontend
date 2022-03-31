import footerHtml from "./footer.html?raw";
import "./footer.module.scss";
import { html } from 'lit-html';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';


export const Footer = () => {
  const footer = document.createDocumentFragment();
  footer.innerHTML = footerHtml;
  return html`
  ${unsafeHTML(footerHtml)}
  `;

};