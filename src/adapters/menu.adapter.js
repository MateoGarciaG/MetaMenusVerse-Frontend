import { validateDataFormMenu } from "/models/menu/menu.model";

export const createAddaptedMenu = (menu) => {
  validateDataFormMenu(menu);
  return {
    title: menu.title,
    descriptionMenu: menu.descriptionMenu,
    stock: parseInt(menu.stock),
    price: parseFloat(menu.price),
    ingredients: menu.ingredients.split(","),
    category: menu.category,
    state: {
      energy: parseInt(menu.energy),
      radiation: parseInt(menu.radiation),
      toxicity: parseInt(menu.toxicity),
    },
  };
};
