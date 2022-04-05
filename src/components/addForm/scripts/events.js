import { createAddaptedMenu } from "/adapters/menu.adapter";
import { addMenu } from "/services/gateways/menu.service";

// IIFE using ES6 export form
export const formAddEvents = (function () {
  const onSubmit = (element) => {
    element.onsubmit = async (e) => {
      e.preventDefault();

      let dataForm = new FormData(element);

      let ingredientsList = [];

      for (var [key, value] of dataForm.entries()) {
        if (key === "ingredients") {
          ingredientsList.push(value);
        }
      }

      dataForm.set("ingredients", ingredientsList);

      let formattedBodyMenu = createAddaptedMenu(Object.fromEntries(dataForm));

      await addMenu(formattedBodyMenu);

      location.reload();

    };
  };

  // --------------------------------------
  // PUBLIC
  // --------------------------------------
  return {
    onSubmit,
  };
})();
