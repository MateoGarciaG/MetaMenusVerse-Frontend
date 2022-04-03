import { SERVER_URL } from "/utils/constants";

export const allCategories = async () => {
  try {
    let headers = new Headers();

    let initHeaders = {
      method: "GET",
      headers: headers,
      mode: "cors",
      cache: "default",
    };
    const data = await fetch(`${SERVER_URL}/categories`, initHeaders);
    const categories = await data.json();
    console.log("categories DATA", categories);
    return categories;
  } catch (error) {
    console.log(error);
  }
};
