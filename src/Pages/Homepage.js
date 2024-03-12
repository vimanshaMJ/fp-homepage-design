import Appbar from "../Components/Navbar";
import React from "react";
import Sidebar from "../Components/Sidebar";
import { Box, Stack } from "@mui/system";

export default function Homepage() {
  return (
    <Box>
      <Appbar />
      <Stack direction="row">
        <Sidebar />
      </Stack>
    </Box>
  );
}
