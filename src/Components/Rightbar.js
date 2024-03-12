import React from "react";
import Box from "@mui/material/Box";
import card1 from "../Images/card1.png";
import card2 from "../Images/card2.png";
import card3 from "../Images/card3.png";
import card4 from "../Images/card4.png";
import card5 from "../Images/card5.png";
import classes from "./Rightbar.module.css";
import { Typography } from "@mui/material";

export default function Rightbar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        width: "18%",
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
