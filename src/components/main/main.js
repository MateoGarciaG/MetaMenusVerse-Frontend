import mainHtml from "./main.html?raw";
import "./main.module.scss"; // HMR
import { html, render } from 'lit-html';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';


export const Main = () => {

  const main = document.querySelector("main");
  render(html`${unsafeHTML(mainHtml)}`, main)

  // return html`
  // ${unsafeHTML(mainHtml)}
  // `;

};