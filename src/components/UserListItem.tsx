import { Tr, Td, Button } from "@chakra-ui/react";

function UserListItem({ user }: any) {
  return (
    <Tr>
      <Td>{user.id}</Td>
      <Td>{user.name}</Td>
      <Td>{user.username}</Td>
      <Td>{user.email}</Td>
      <Td>{user.address.city}</Td>
      <Td>
        <Button color="white" colorScheme="yellow">
          Edit
        </Button>
      </Td>
      <Td>
        <Button color="white" colorScheme="red">
          Delete
        </Button>
      </Td>
    </Tr>
  );
}

export default UserListItem;
