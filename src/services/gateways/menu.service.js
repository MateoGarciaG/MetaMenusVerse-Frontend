import { SERVER_URL } from "/utils/constants";

export const allMenus = async () => {
  try {
    let headers = new Headers();

    let initHeaders = {
      method: "GET",
      headers: headers,
      mode: "cors",
      cache: "default",
    };
    const data = await fetch(`${SERVER_URL}/menus`, initHeaders);
    const menus = await data.json();
    console.log("menus DATA", menus);
    return menus;
  } catch (error) {
    console.log(error);
  }
};

