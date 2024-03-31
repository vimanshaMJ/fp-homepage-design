import Appbar from "../Components/Navbar";
import React from "react";
import { Box, Container, Grid, Stack } from "@mui/material";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Rightbar from "../Components/Rightbar";
import Footer from "../Components/Footer";

export default function Homepage() {
  return (
    <Box>
      <Appbar />
      <Container>
        <Stack direction="row">
          <Grid container spacing={0}>
            <Grid item xs={3}>
              <Sidebar />
            </Grid>

            <Grid item xs={6}>
              <Feed />
            </Grid>

            <Grid item xs={3}>
              <Rightbar />
            </Grid>
          </Grid>
        </Stack>
      </Container>
      <Footer />
    </Box>
  );
}
