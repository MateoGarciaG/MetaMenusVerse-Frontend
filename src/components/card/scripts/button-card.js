
export const createButtonCard = (content, classNameContent = "btn btn-outline-warning btn-lg", idMenu) => {
  const createDivButton = document.createElement("div");

  const createButton = document.createElement("button");

  createButton.className = classNameContent;

  createButton.setAttribute("data-id-menu", idMenu);

  createButton.textContent = content;

  createDivButton.appendChild(createButton);

  return createDivButton;
}