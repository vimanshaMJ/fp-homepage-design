import React from "react";
import Box from "@mui/material/Box";
import FilledButton from "./FilledButton";

export default function Feed() {
  return (
    <Box
      sx={{
        width: "72%",
        textAlign: "center",

        border: "1px solid #E5E5E5",
      }}
    >
      <FilledButton buttonText={"Place a Notice"} />
    </Box>
  );
}
