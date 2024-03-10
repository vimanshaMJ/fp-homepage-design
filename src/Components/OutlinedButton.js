import React from "react";
import Button from "@mui/material-next/Button";

export default function OutlinedButton({ buttonText }) {
  return (
    <div>
      <Button
        size="small"
        variant="outlined"
        sx={{
          fontFamily: "lato",
          fontSize: "0.7rem",
          backgroundColor: "white",
          color: "#5A189A",
          border: "2px solid #5A189A",
          padding: "8px 40px",
          marginLeft: "10px",
          fontWeight: 700,
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
}
