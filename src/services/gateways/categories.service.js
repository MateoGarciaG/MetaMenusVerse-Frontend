import { SERVER_URL } from "/utils/constants";

export const allCategories = async () => {
  try {
    const data = await fetch(`${SERVER_URL}/categories`);
    const categories = await data.json();
    console.log("categories DATA", categories);
    return categories;
  } catch (error) {
    console.log(error);
  }
};

