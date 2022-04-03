import headerHtml from "./header.html?raw";
import "./header.module.scss";
import { html, render } from 'lit-html';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';


export const Header = () => {

  const header = document.querySelector("header");
  render(html`${unsafeHTML(headerHtml)}`, header)

  // return html`
  // ${unsafeHTML(headerHtml)}
  // `;

};