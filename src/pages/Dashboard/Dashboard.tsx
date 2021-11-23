import React from "react";

import { Box, Heading } from "@chakra-ui/layout";
import UserView from "../../components/UserView";

function Dashboard() {
  return (
    <Box>
      <Heading>Dashboard</Heading>
      <UserView />
    </Box>
  );
}

export default Dashboard;
