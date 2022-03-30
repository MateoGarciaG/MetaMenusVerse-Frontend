import addFormHtml from "./addForm.html?raw";
import "./addForm.module.scss";

export const AddForm = () => {
  const addForm = document.createDocumentFragment();
  addForm.innerHTML = addFormHtml;
  return addForm.innerHTML;

};