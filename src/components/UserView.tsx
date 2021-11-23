import UserViewHeader from "./UserViewHeader";

import { Box } from "@chakra-ui/layout";
import UsersList from "./UsersList";

function UserView() {
  return (
    <Box mt={8} py={3}>
      <UserViewHeader />
      <UsersList />
    </Box>
  );
}

export default UserView;
