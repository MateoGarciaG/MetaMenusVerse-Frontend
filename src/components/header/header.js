import headerHtml from "./header.html?raw";


export const Header = () => {
  const header = document.createDocumentFragment();
  header.innerHTML = headerHtml;
  return header.innerHTML;

};