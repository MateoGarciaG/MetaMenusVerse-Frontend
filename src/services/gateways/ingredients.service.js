import { SERVER_URL } from "/utils/constants";

export const allIngredients = async () => {
  try {
    const data = await fetch(`${SERVER_URL}/ingredients`);
    const ingredients = await data.json();
    console.log("INGREDIENTS DATA", ingredients);
    return ingredients;
  } catch (error) {
    console.log(error);
  }
};

