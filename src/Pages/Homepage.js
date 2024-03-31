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
          <Grid
            container
            spacing={0}
            sx={{ display: { md: "flex", sm: "none", xs: "none" } }}
          >
            <Grid item md={3}>
              <Sidebar />
            </Grid>

            <Grid item md={6}>
              <Feed />
            </Grid>

            <Grid item md={3}>
              <Rightbar />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={0}
            sx={{ display: { sm: "flex", md: "none", xs: "none" } }}
          >
            <Grid item sm={8}>
              <Feed />
            </Grid>
            <Grid item sm={4}>
              <Rightbar />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={0}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <Grid item sm={12}>
              <Feed />
            </Grid>
            <Grid item sm={4}>
              <Rightbar />
            </Grid>
          </Grid>
        </Stack>
      </Container>
      <Footer />
    </Box>
  );
}
