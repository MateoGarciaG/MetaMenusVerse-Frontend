// IIFE using ES6 export form
export const formAddEvents = (function () {
  const onSubmit = (element) => {
    element.onsubmit = async (e) => {
      e.preventDefault();

      let dataForm = new FormData(element);

      let allIng = "";
      // Display the key/value pairs
      for (var pair of dataForm.entries()) {
        console.log(pair[0] + ", " + pair[1]);
        if (pair[0] === "ingredients") {
          allIng += pair[1];
        }
      }

      console.log("ENTRIERS", dataForm.entries());

      console.log("INGREDIENTS", allIng);
    };
  };

  // --------------------------------------
  // PUBLIC
  // --------------------------------------
  return {
    onSubmit,
  };
})();
