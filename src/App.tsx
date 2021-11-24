import Dashboard from "./pages/Dashboard/Dashboard";

import { Box } from "@chakra-ui/layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAndSetUsers } from "./redux/actions";

function App() {
  // Setting up users here on app load
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAndSetUsers());
  }, [dispatch]);

  return (
    <Box p={10}>
      <Dashboard />
    </Box>
  );
}

export default App;
