const initialState = {
  contents: [],
};
export const contentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CONTETNTS":
      return {
        ...state,
        contents: payload,
      };
    default:
      return state;
  }
};

export const selectedContentReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "SELECTED_CONTENT":
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};
