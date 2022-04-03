export const createButtonCard = (content, classNameContent = "btn btn-outline-warning btn-lg") => {
  const createDivButton = document.createElement("div");

  const createButton = document.createElement("button");

  createButton.className = classNameContent;

  createButton.textContent = content;

  createDivButton.appendChild(createButton);

  return createDivButton;
}