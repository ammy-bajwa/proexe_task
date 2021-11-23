import { Flex, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";

function UserViewHeader() {
  return (
    <Flex py={3} justify="space-between" p={3} boxShadow="md">
      <Text fontSize="3xl">User List</Text>
      <Button colorScheme="blue" size="md">
        Add new users
      </Button>
    </Flex>
  );
}

export default UserViewHeader;
