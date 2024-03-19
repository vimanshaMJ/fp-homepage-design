import Appbar from "../Components/Navbar";
import React from "react";
import { Box, Stack } from "@mui/system";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Rightbar from "../Components/Rightbar";
import Footer from "../Components/Footer";

export default function Homepage() {
  return (
    <Box>
      <Appbar />
      <Stack direction="row">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Footer />
    </Box>
  );
}
