import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import React from "react";
import img3 from "../Images/img3.png";
import sidaLogo from "../Images/sidaLogo.png";
import classes from "./SidaPost.module.css";
import FilledButton from "./FilledButton";

export default function SidaPost() {
  return (
    <Box
      sx={{
        color: "white",
        backgroundImage: `url(${img3})`,
        backgroundSize: "cover",
        textAlign: "left",
        marginBottom: "20px",
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "lato",
          padding: "20px 200px 0 40px",
          fontWeight: "600",
        }}
      >
        Make Your Funeral Plans In Advance
      </Typography>

      <Box sx={{ display: "flex" }}>
        <img src={sidaLogo} alt="" className={classes.sidaLogo} />
        <FilledButton
          buttonText={"CALL US NOW"}
          className={classes.callNowBtn}
        />
      </Box>
    </Box>
  );
}
