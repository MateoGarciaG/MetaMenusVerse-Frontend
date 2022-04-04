import { removeToken } from "/styled-components/multiselectv2/close-option.min.js";

// IIFE using ES6 export form
export const cardEvents = (function () {
  const onClickEdit = (e) => {
    e.preventDefault();

    if (e.target.classList.contains("editar")) {
      console.log("CLICK BOTON EDIT", e.target);

      let idMenuFormActualizar = document.querySelector(
        "#idMenuFormActualizar"
      );

      // Uso del dataset prop del botón para acceder al id
      const menuIdFromButton = e.target.dataset.idMenu;

      const cardElementById = document.getElementById(menuIdFromButton);

      console.log(cardElementById);

      // Rellenar Form Actualizar/Edit con los valores de la card element

      idMenuFormActualizar.value = menuIdFromButton;

      document.getElementById(
        "mostrarIdSeleccionado"
      ).innerHTML = `ID: ${menuIdFromButton}`;

      document.querySelector("#actualizarTitle").value = cardElementById
        .querySelector(".title")
        .textContent.trim();

      document.querySelector("#actualizarDescriptionMenu").value =
        cardElementById.querySelector(".descriptionMenu").textContent.trim();

      document.querySelector("#actualizarStock").value = cardElementById
        .querySelector(".stock")
        .textContent.trim();

      document.querySelector("#actualizarPrice").value = cardElementById
        .querySelector(".price")
        .textContent.trim();

      document.querySelector("#actualizarCategory").value = cardElementById
        .querySelector(".category")
        .textContent.trim();

      document.querySelector("#actualizarEnergy").value = cardElementById
        .querySelector(".energy")
        .textContent.trim();

      document.querySelector("#actualizarToxicity").value = cardElementById
        .querySelector(".toxicity")
        .textContent.trim();

      document.querySelector("#actualizarRadiation").value = cardElementById
        .querySelector(".radiation")
        .textContent.trim();

      console.log(
        "INGREDIENTS CARD EDIT",
        cardElementById.querySelectorAll(".ingredient")
      );

      [...cardElementById.querySelectorAll(".ingredient")].forEach((i) => {
        let option = document.createElement("div");
        option.className = "selected-wrapper";
        option.innerHTML = `
          <span class="selected-label">${i.textContent.trim()}</span>
          <a class="selected-close" tabindex="-1" data-option="${i.textContent.trim()}" data-hits="0">x</a>
          `;

        option.onclick = removeToken;
        console.log("OPTION", option);
        document.querySelector("#actualizarIngredients").parentElement.appendChild(option);
      });
    }

  };

  // --------------------------------------
  // PUBLIC
  // --------------------------------------
  return {
    onClickEdit,
  };
})();
