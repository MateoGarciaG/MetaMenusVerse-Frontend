import { loginToken } from "/services/gateways/token-operations.service";

// IIFE using ES6 export form
export const formLoginEvents = (function () {
  const onSubmit = async (element) => {
    element.onsubmit = async (e) => {
      e.preventDefault();

      let dataForm = new FormData(element);

      // TODO: Create Adapter to user

      console.log(Object.fromEntries(dataForm));

      let response = await loginToken(Object.fromEntries(dataForm));

      let tokenElement = document.getElementById("token");

      if (response.token) {
        localStorage.setItem("token", response.token);
        location.reload();
      } else {
        tokenElement.innerHTML =
          "<h3>No estás autorizado o no tienes un usuario</h3>";
      }

    };
  };

  const onLogout = (e) => {
    e.preventDefault();

    if (e.target.classList.contains("logout")) {
      localStorage.removeItem("token");
      location.reload();
    }
  };

  // --------------------------------------
  // PUBLIC
  // --------------------------------------
  return {
    onSubmit,
    onLogout,
  };
})();
