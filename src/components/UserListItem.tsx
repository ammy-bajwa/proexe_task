import { Tr, Td } from "@chakra-ui/react";
import DeleteUserButton from "./DeleteUserButton";
import EditUserButton from "./EditUserButton";

function UserListItem({ user }: any) {
  return (
    <Tr>
      <Td>{user.id}</Td>
      <Td>{user.name}</Td>
      <Td>{user.username}</Td>
      <Td>{user.email}</Td>
      <Td>{user.address.city}</Td>
      <Td>
        <EditUserButton name={user.name} email={user.email} id={user.id} />
      </Td>
      <Td>
        <DeleteUserButton id={user.id} />
      </Td>
    </Tr>
  );
}

export default UserListItem;
