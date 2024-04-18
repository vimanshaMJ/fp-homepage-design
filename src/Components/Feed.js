import React from "react";
import classes from "./Feed.module.css";
import Box from "@mui/material/Box";
import FilledButton from "./FilledButton";
import SearchBtn from "./SearchBtn";
import TheDatePicker from "./DatePicker";
import FuneralCard from "./FuneralCard";
import SidaPost from "./SidaPost";

export default function Feed() {
  return (
    <Box
      sx={{
        flex: "2",
        textAlign: "left",
        margin: "50px 20px",
      }}
    >
      <FuneralCard />
      <FuneralCard />
      <SidaPost />
      <FuneralCard />

      <a href="" className={classes.previous}>
        Previous
      </a>
      <a href="" className={classes.next}>
        Next
      </a>
    </Box>
  );
}
