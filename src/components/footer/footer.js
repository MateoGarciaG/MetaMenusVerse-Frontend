import footerHtml from "./footer.html?raw";
import "./footer.module.scss";
import { html, render } from 'lit-html';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';


export const Footer = () => {

  const footer = document.querySelector("footer");
  render(html`${unsafeHTML(footerHtml)}`, footer)


};