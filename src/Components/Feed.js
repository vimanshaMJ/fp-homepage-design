import React from "react";
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
        width: "36%",
        textAlign: "left",
        margin: "50px 20px",
      }}
    >
      {/* <TheDatePicker label={"From"} />
      <TheDatePicker label={"To"} />
      <FilledButton buttonText={"Place a Notice"} /> */}
      <FuneralCard />
      <FuneralCard />
      <SidaPost />
      <FuneralCard />
    </Box>
  );
}
