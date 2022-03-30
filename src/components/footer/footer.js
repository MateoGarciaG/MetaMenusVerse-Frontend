import footerHtml from "./footer.html?raw";
import "./footer.module.scss";

export const Footer = () => {
  const footer = document.createDocumentFragment();
  footer.innerHTML = footerHtml;
  return footer.innerHTML;

};