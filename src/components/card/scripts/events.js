import { deleteMenu } from "/services/gateways/menu.service";
import { removeToken } from "/styled-components/multiselectv2/close-option.min.js";

// IIFE using ES6 export form
export const cardEvents = (function () {
  const onClickEdit = (e) => {
    e.preventDefault();

    if (e.target.classList.contains("editar")) {
      if (localStorage.getItem("token")) {
        let idMenuFormActualizar = document.querySelector(
          "#idMenuFormActualizar"
        );

        // Uso del dataset prop del botón para acceder al id
        const menuIdFromButton = e.target.dataset.idMenu;

        const cardElementById = document.getElementById(menuIdFromButton);

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

        // delete old options values
        let oldOptions = document
          .querySelector("#actualizarIngredients")
          .parentElement.getElementsByClassName("selected-wrapper");

        [...oldOptions].forEach((oldOption) => {
          oldOption.parentElement.removeChild(oldOption);
        });

        let selectMultiple = document.querySelector("#actualizarIngredients");

        [...selectMultiple.querySelectorAll("option")].forEach((op) => {
          op.removeAttribute("selected");
        });

        [...cardElementById.querySelectorAll(".ingredient")].forEach((i) => {
          let option = document.createElement("div");
          option.className = "selected-wrapper";
          option.innerHTML = `
          <span class="selected-label">${i.textContent.trim()}</span>
          <a class="selected-close" tabindex="-1" data-option="${i.textContent.trim()}" data-hits="0">x</a>
          `;

          option.onclick = removeToken;

          selectMultiple
            .querySelector(`option[value="${i.textContent.trim()}"]`)
            .setAttribute("selected", "");

          selectMultiple.parentElement.insertBefore(
            option,
            selectMultiple.nextSibling
          );
        });

        document.body.scrollTop = 1700;
        document.documentElement.scrollTop = 1700;
      } else {
        alert("Debes loguearte para editar este menú");
      }
    }
  };

  const onClickDelete = (e) => {
    e.preventDefault();

    if (e.target.classList.contains("eliminar")) {
      if (localStorage.getItem("token")) {
        const menuIdButton = e.target.dataset.idMenu;
        const confirmarEliminacion = confirm(
          "Estás seguro de eliminar este menú?"
        );

        const executeDelete = async () => {
          let response = await deleteMenu(menuIdButton);
          console.log(response);
          location.reload();
        };

        if (confirmarEliminacion) {
          executeDelete();
        }
      } else {
        alert("Debes loguearte para eliminar este menú");
      }
    }
  };

  const onClickCopy = (e) => {
    e.preventDefault();

    if (e.target.classList.contains("copiar")) {
      const menuIdFromButton = e.target.dataset.idMenu;

      const cardElementById = document.getElementById(menuIdFromButton);

      let spanCodeContent = cardElementById.querySelector(".code-content");

      console.log("SPAN CODE COPIED", spanCodeContent.textContent);

      window.navigator.clipboard.writeText(spanCodeContent.textContent);
    }
  };

  // --------------------------------------
  // PUBLIC
  // --------------------------------------
  return {
    onClickEdit,
    onClickDelete,
    onClickCopy,
  };
})();
