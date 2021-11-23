import { Box, Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

function UsersList() {
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
          <Tr>
            <Td>inches</Td>
            <Td>inches</Td>
            <Td>inches</Td>
            <Td>inches</Td>
            <Td>inches</Td>
            <Td>
              <Button>Edit</Button>
            </Td>
            <Td>
              <Button>Delete</Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}

export default UsersList;
