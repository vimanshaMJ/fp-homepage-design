import React from "react";
import Box from "@mui/material/Box";
import card1 from "../Images/card1.png";
import card2 from "../Images/card2.png";
import card3 from "../Images/card3.png";
import card4 from "../Images/card4.png";
import card5 from "../Images/card5.png";
import classes from "./Rightbar.module.css";

export default function Rightbar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        width: "18%",
        margin: "50px 0",
        border: "1px solid #E5E5E5",
      }}
    >
      <CardComponent
        image={card1}
        title="Frazer’s Holiday Remembrance Ornaments"
      />
      <CardComponent
        image={card2}
        title="Contemplating life from the viewpoint of a funeral director"
      />
      <CardComponent
        image={card3}
        title="Frazer’s Holiday Remembrance Ornaments "
      />
      <CardComponent
        image={card4}
        title="Is Human Composting the Future of Deathcare? "
      />
      <CardComponent
        image={card5}
        title="Frazer’s Holiday Remembrance Ornaments "
      />
    </Box>
  );
}

function CardComponent({ image, title }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <img src={image} alt="" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "10px",
        }}
      >
        <h5 className={classes.cardDesc}>
          {title} <br />
          <span>
            <a href="">Read More {">"}</a>
          </span>
        </h5>
      </Box>
    </Box>
  );
}
