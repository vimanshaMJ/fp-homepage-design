import * as React from "react";
import Box from "@mui/material/Box";

export default function Sidebar() {
  return (
    <Box sx={{ display: "flex" }}>
      <h4>Plan Ahead</h4>
      <h4>Bereavement Support</h4>
      <h4>Law & advice</h4>
      <h4>Funeral Wishes</h4>
      <h4>Funeral Directors</h4>
    </Box>
  );
}
