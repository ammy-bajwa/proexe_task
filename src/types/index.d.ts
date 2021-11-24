interface User {
  id: string;
  username: string;
  name: string;
  email: string;
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
