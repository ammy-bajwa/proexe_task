import { fetchUsers } from "../../api/users";
import { SET_USERS } from "../actionTypes";

export const fetchAndSetUsers = () => {
  return async (dispatch: DispatchType) => {
    const users: User[] = await fetchUsers();
    console.log({ users, dispatch });
    dispatch(setUsers(users));
  };
};

export const setUsers = (users: User[]) => {
  return {
    type: SET_USERS,
    users,
  };
};
