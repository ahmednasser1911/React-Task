export const setContent = (products) => {
  return {
    type: "SET_CONTETNTS",
    payload: products,
  };
};

export const selectedContent = (product) => {
  return {
    type: "SELECTED_CONTENT",
    payload: product,
  };
};
