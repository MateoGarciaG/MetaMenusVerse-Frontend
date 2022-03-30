import headerHtml from "./header.html?raw";
import "./header.module.scss";

export const Header = () => {
  const header = document.createDocumentFragment();
  header.innerHTML = headerHtml;
  return header.innerHTML;

};