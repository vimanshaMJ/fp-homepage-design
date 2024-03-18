import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import React from "react";
import classes from "./FuneralCard.module.css";
import img1 from "../Images/img1.png";
import manImg from "../Images/man.png";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import FilledButton from "./FilledButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function FuneralCard() {
  return (
    <Box
      sx={{
        fontFamily: "lato",
        border: "1px solid #E5E5E5",
        borderRadius: "8px",
      }}
    >
      <Typography variant="p" sx={{ display: "flex", alignItems: "center" }}>
        <img src={img1} alt="" className={classes.img1} />
        Posted by{" "}
        <span className={classes.span1}> Family Funeral Services</span>
      </Typography>

      <Box
        sx={{
          backgroundColor: "#FAF5FF",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={manImg} alt="" className={classes.manImg} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            lineHeight: "1.5",
          }}
        >
          <Typography
            variant="p"
            sx={{ fontWeight: "900", color: "#63019F", fontSize: "1.2rem" }}
          >
            Chadwick Brown
          </Typography>

          <Typography variant="p" sx={{ fontSize: "small" }}>
            Born:
            <span className={classes.span1}>
              12 <sup>th</sup> January 1989
            </span>{" "}
            Died:{" "}
            <span className={classes.span1}>
              24 <sup>th</sup> June 2020
            </span>
          </Typography>

          <Typography variant="p" sx={{ fontSize: "small", fontWeight: "900" }}>
            Death Notice
          </Typography>

          <Typography variant="p" sx={{ fontSize: "small", fontWeight: "600" }}>
            12 days ago
            <FmdGoodIcon sx={{ padding: "0 2px 0 15px" }} />
            <span className={classes.span2}>London</span>
          </Typography>
        </Box>

        <FilledButton buttonText={"Donate"} className={classes.donateBtn} />
        <MoreVertIcon sx={{ marginTop: "-15px" }} />
      </Box>
    </Box>
  );
}
