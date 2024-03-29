import React from "react";
import Button from "@mui/material-next/Button";

export default function FilledButton({ buttonText, className }) {
  return (
    <div>
      <Button
        className={className}
        size="small"
        variant="filled"
        sx={{
          fontFamily: "lato",
          fontSize: "0.7rem",
          backgroundColor: "#5A189A",
          color: "white",
          fontWeight: "bold",
          margin: "0 8px",
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
}
