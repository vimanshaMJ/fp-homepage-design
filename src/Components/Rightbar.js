import React from "react";
import Box from "@mui/material/Box";
import card1 from "../Images/card1.png";
import classes from "./Rightbar.module.css";

export default function Rightbar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        width: "18%",
        border: "solid",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img src={card1} alt="" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h5 className={classes.cardDesc}>
            Frazer’s Holiday Remembrance Ornaments{" "}
          </h5>
          <a href="#" className={classes.cardLink}>
            <h5>Read More</h5>{" "}
          </a>
        </Box>
      </Box>
    </Box>
  );
}
