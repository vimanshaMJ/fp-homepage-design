import React from "react";
import Box from "@mui/material/Box";
import FilledButton from "./FilledButton";
import SearchBtn from "./SearchBtn";
import TheDatePicker from "./DatePicker";
import classes from "./Feed.module.css";

export default function Feed() {
  return (
    <Box
      sx={{
        width: "36%",
        textAlign: "center",
        margin: "50px 20px",
      }}
    >
      {/* <TheDatePicker label={"From"} className={classes.datePicker} />
      <TheDatePicker label={"To"} className={classes.datePicker} />
      <FilledButton buttonText={"Place a Notice"} /> */}
    </Box>
  );
}
