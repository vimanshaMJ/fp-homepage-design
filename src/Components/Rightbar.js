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
          alignItems: "center",
        }}
      >
        <img src={card1} alt="" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "10px",
          }}
        >
          <h5 className={classes.cardDesc}>
            Frazer’s Holiday Remembrance Ornaments <br />
            <span>
              <a href="">Read More {">"}</a>
            </span>
          </h5>
        </Box>
      </Box>
    </Box>
  );
}
