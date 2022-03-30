import bannerHtml from "./banner.html?raw";
import "./banner.module.scss";

export const Banner = () => {
  const banner = document.createDocumentFragment();
  banner.innerHTML = bannerHtml;
  return banner.innerHTML;

};