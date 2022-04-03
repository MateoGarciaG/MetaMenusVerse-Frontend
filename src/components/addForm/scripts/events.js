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

      let bodyMenu = Object.fromEntries(dataForm);

      let formattedBodyMenu = {
        title: bodyMenu.title,
        descriptionMenu: bodyMenu.descriptionMenu,
        stock: parseInt(bodyMenu.stock),
        price: parseFloat(bodyMenu.price),
        ingredients: bodyMenu.ingredients.split(","),
        category: bodyMenu.category,
        state: {
          energy: parseInt(bodyMenu.energy),
          radiation: parseInt(bodyMenu.radiation),
          toxicity: parseInt(bodyMenu.toxicity),
        },
      };

      await addMenu(JSON.stringify(formattedBodyMenu));
    };
  };

  // --------------------------------------
  // PUBLIC
  // --------------------------------------
  return {
    onSubmit,
  };
})();
