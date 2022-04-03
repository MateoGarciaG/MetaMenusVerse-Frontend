import { SERVER_URL } from "/utils/constants";

export const allIngredients = async () => {
  try {
    let headers = new Headers();

    let initHeaders = {
      method: "GET",
      headers: headers,
      mode: "cors",
      cache: "default",
    };
    const data = await fetch(`${SERVER_URL}/ingredients`, initHeaders);
    const ingredients = await data.json();
    console.log("INGREDIENTS DATA", ingredients);
    return ingredients;
  } catch (error) {
    console.log(error);
  }
};

