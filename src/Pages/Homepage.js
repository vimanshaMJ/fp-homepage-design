import Appbar from "../Components/Navbar";
import React from "react";
import { Box, Container, Stack } from "@mui/system";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Rightbar from "../Components/Rightbar";
import Footer from "../Components/Footer";

export default function Homepage() {
  return (
    <Container>
      <Box>
        <Appbar />
        <Stack direction="row">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Footer />
      </Box>
    </Container>
  );
}
