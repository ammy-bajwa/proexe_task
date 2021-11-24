const initialState = {
  users: [],
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      return {
        ...state,
      };
    case "REMOVE_ARTICLE":
      return {
        ...state,
      };
  }
  return state;
};

export default reducer;
