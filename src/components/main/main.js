import mainHtml from "./main.html?raw";
import "./main.module.scss";

export const Main = () => {
  const main = document.createDocumentFragment();
  main.innerHTML = mainHtml;
  return main.innerHTML;

};