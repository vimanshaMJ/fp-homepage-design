import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import React from "react";
import classes from "./FuneralCard.module.css";
import img1 from "../Images/img1.png";

export default function FuneralCard() {
  return (
    <Box sx={{ fontFamily: "lato", border: "solid" }}>
      <Typography variant="p" sx={{ display: "flex", alignItems: "center" }}>
        <img src={img1} alt="" className={classes.img1} />
        Posted by{" "}
        <span className={classes.span1}> Family Funeral Services</span>
      </Typography>
    </Box>
  );
}
