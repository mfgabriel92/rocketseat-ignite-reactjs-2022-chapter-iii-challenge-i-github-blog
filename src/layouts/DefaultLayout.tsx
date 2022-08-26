import { Box } from "@chakra-ui/react";
import { Header } from "@components/Header";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <>
      <Header />
      <Box width="full" maxWidth="864px" margin="auto">
        <Outlet />
      </Box>
    </>
  );
}

export { DefaultLayout };
