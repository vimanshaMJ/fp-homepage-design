import React from "react";
import Box from "@mui/material/Box";
import card1 from "../Images/card1.png";
import card2 from "../Images/card2.png";
import card3 from "../Images/card3.png";
import card4 from "../Images/card4.png";
import card5 from "../Images/card5.png";
import classes from "./Rightbar.module.css";
import FilledButton from "./FilledButton";

function CardComponent(item) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src={item.image} alt="" />
      <Box
        sx={{
          paddingTop: "10px",
          display: "flex",
        }}
      >
        <h5 className={classes.cardDesc}>
          {item.description} <br />
          <span>
            <a href="">{item.link}</a>
          </span>
        </h5>
      </Box>
    </Box>
  );
}

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
      description:
        "Contemplating life from the viewpoint of a funeral director",
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
      description: "Is Human Composting the Future of Deathcare?",
      link: "Read More >",
    },
    {
      id: 5,
      image: card5,
      description: "Frazer’s Holiday Remembrance Ornaments",
      link: "Read More >",
    },
  ];

  return (
    <Box sx={{ width: "30%", paddingRight: "14%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "50px 0",
          paddingBottom: "20px",
          border: "1px solid #E5E5E5",
        }}
      >
        <Box>
          {cardList.map((item) => (
            <CardComponent
              key={item.id}
              image={item.image}
              description={item.description}
              link={item.link}
            />
          ))}
        </Box>
        <FilledButton
          buttonText={"View All Stories"}
          className={classes.cardBtn}
        />
      </Box>
    </Box>
  );
}
