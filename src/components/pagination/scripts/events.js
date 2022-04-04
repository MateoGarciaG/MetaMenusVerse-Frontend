// IIFE using ES6 export form
export const paginationEvents = (function () {
  const onClickNumberPage = (element, eventHandler) => {
    element.addEventListener("click", eventHandler);
  };

  // --------------------------------------
  // PUBLIC
  // --------------------------------------
  return {
    onClickNumberPage,
  };
})();
