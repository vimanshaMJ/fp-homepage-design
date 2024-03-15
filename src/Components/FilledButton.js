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
          padding: "10px 30px",
          marginRight: "10px",
          fontWeight: "bold",
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
}
