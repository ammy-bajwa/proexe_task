import { SET_USERS } from "../actionTypes";

const initialState: UsersState = {
  users: [],
};

export const reducer = (state = initialState, action: ActionRedux) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
  }
  return state;
};

export default reducer;
