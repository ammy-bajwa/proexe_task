export const fetchUsers = () => {
  return new Promise<User[]>(async (resolve, reject) => {
    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
      );
      const users: User[] = await response.json();
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};
