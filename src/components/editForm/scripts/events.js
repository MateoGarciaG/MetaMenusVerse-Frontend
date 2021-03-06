import { createAddaptedMenu } from "/adapters/menu.adapter";
import { editMenu } from "/services/gateways/menu.service";

// IIFE using ES6 export form
export const formEditEvents = (function () {
  const onSubmit = (element) => {
    element.onsubmit = async (e) => {
      e.preventDefault();

      let idMenuFormActualizar = document.querySelector(
        "#idMenuFormActualizar"
      );

      if (idMenuFormActualizar.value) {
        let dataForm = new FormData(element);

        let ingredientsList = [];

        for (var [key, value] of dataForm.entries()) {
          if (key === "ingredients") {
            ingredientsList.push(value);
            console.log("INGREDIENT", value);
          }
        }

        dataForm.set("ingredients", ingredientsList);

        let formattedBodyMenu = createAddaptedMenu(
          Object.fromEntries(dataForm)
        );

        console.log(formattedBodyMenu);

        await editMenu(formattedBodyMenu, idMenuFormActualizar.value);

        location.reload();
      } else {
        alert("Debes seleccionar un menu");
        location.reload();
      }
    };
  };

  // --------------------------------------
  // PUBLIC
  // --------------------------------------
  return {
    onSubmit,
  };
})();
