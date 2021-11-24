import { Box, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import UserListItem from "./UserListItem";

function UsersList() {
  const { users } = useSelector((state: UsersState) => state);
  return (
    <Box w="full" overflow="auto">
      <Table variant="striped" overflow="auto" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>City</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user: User) => (
            <UserListItem key={user.id} user={user} />
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default UsersList;
