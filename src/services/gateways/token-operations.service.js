import { SERVER_URL } from "/utils/constants";

export const loginToken = async (bodyLogin) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(bodyLogin);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    let response = await fetch(`${SERVER_URL}/login`, requestOptions);

    return response.json();
  } catch (error) {
    console.log(error);
  }
};
