import React from "react";
import Box from "@mui/material/Box";
import card1 from "../Images/card1.png";
import card2 from "../Images/card2.png";
import card3 from "../Images/card3.png";
import card4 from "../Images/card4.png";
import card5 from "../Images/card5.png";
import classes from "./Rightbar.module.css";
import FilledButton from "./FilledButton";
import { Typography } from "@mui/material";
import img2 from "../Images/img2.png";
import birksLogo from "../Images/birksLogo.png";

function CardComponent(item) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <img src={item.image} alt="" className={classes.cardImg} />
      <Box
        sx={{
          paddingTop: "10px",
          display: "flex",
        }}
      >
        <h5 className={classes.cardDesc}>
          {item.description} <br />
          <span>
            <a href="" className={classes.rightbarLink}>
              {item.link}
            </a>
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
    <Box sx={{ flex: "1" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "50px 0 20px 0",
          paddingBottom: "20px",
          paddingRight: "0px",
          border: "1px solid #E5E5E5",
          borderRadius: "8px",
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

      <Box
        sx={{
          margin: "10px 0",
          paddingBottom: "20px",
          backgroundImage: `url(${img2})`,
          textAlign: "left",
        }}
      >
        <img src={birksLogo} alt="" className={classes.birksLogo} />
        <Typography
          variant="h4"
          sx={{
            color: "white",
            padding: "20px 20px 0 20px",
            fontSize: "2.2rem",
            fontWeight: "600",
            lineHeight: "1.2",
            fontFamily: "lato",
          }}
          className={classes.birksTitle}
        >
          We Are Here For You...
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#BEB8B8",
            padding: "20px",
            fontSize: "1rem",
            lineHeight: "1.5",
            fontFamily: "lato",
          }}
        >
          Venenatis, quis risus justo, nisl, lorem venenatis. Nunc, pulvinar
          amet in odio ac tellus
        </Typography>

        <FilledButton
          buttonText={"CALL US NOW"}
          className={classes.callNowBtn}
        />
      </Box>
    </Box>
  );
}
