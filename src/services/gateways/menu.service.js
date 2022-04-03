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

export const addMenu = async (bodyMenu) => {
  try {
    let initHeaders = {
      method: "POST",
      body: JSON.stringify(bodyMenu),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      mode: "cors",
      cache: "default",
    };

    let response = await fetch(`${SERVER_URL}/menus/save`, initHeaders);

    console.log(response);

    location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const editMenu = async (bodyMenu, idMenu) => {
  try {
    let initHeaders = {
      method: "PUT",
      body: JSON.stringify(bodyMenu),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      mode: "cors",
      cache: "default",
    };

    let response = await fetch(
      `${SERVER_URL}/menus/update/${idMenu}`,
      initHeaders
    );

    console.log(response);

    // location.reload();
  } catch (error) {
    console.log(error);
  }
};
