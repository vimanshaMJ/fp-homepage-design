import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function CommentSection() {
  return (
    <Box>
      <Container sx={{ border: "solid" }}>
        <Grid item md={12} sx={{ border: "solid" }}>
          This is the comment section
        </Grid>
      </Container>
    </Box>
  );
}
