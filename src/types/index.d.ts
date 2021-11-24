interface User {
  id: string;
  name: string;
  username: string;
  name: string;
  address: { city: string };
}

type UsersState = {
  users: User[];
};

type ActionRedux = {
  type: string;
  users: User[];
};

type DispatchType = (args: ActionRedux) => ActionRedux;
