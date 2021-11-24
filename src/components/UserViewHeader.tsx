import { Flex, Text } from "@chakra-ui/layout";

import AddNewUserButton from "./AddNewUserButton";

function UserViewHeader() {
  return (
    <Flex py={3} justify="space-between" p={3} boxShadow="md">
      <Text fontSize="3xl">User List</Text>
      <AddNewUserButton />
    </Flex>
  );
}

export default UserViewHeader;
