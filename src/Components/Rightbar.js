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
  const cardList = [
    {
      id: 1,
      image: card1,
      description: "Frazer’s Holiday Remembrance Ornaments",
      link: "Read More >",
    },
    {
      id: 2,
      image: card2,
      description: "Frazer’s Holiday Remembrance Ornaments",
      link: "Read More >",
    },
    {
      id: 3,
      image: card3,
      description: "Frazer’s Holiday Remembrance Ornaments",
      link: "Read More >",
    },
    {
      id: 4,
      image: card4,
      description: "Frazer’s Holiday Remembrance Ornaments",
      link: "Read More >",
    },
    {
      id: 5,
      image: card5,
      description: "Frazer’s Holiday Remembrance Ornaments",
      link: "Read More >",
    },
  ];

  return cardList.map((item) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        width: "18%",
        key: item.id,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img src={item.image} alt="" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "10px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ paddingRight: "15px", fontWeight: "500" }}
          >
            {item.description}
            <span>
              <a href="">{item.link}</a>
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  ));
}
