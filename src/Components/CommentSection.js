import React, { useState } from "react";
import classes from "./CommentSection.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import jonny from "../Images/jonny.png";
import jessy from "../Images/jessy.png";
import andrea from "../Images/andrea.png";
import { Typography } from "@mui/material";
import rose from "../Images/rose.png";
import candle from "../Images/candle.png";
import flowers from "../Images/flowers.png";
import ribbon from "../Images/ribbon.png";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function CommentSection() {
  const comments = [
    {
      id: 1,
      image: jonny,
      name: "Jonny Peterz",
      time: "21 minutes ago",
      comment:
        "Mi ultricies dolor, quis risus, risus. Nisi, lacinia feugiat gravida sed tortor neque risus risus diam.",
    },
    {
      id: 2,
      image: jessy,
      name: "Jessy Peterz",
      time: "21 minutes ago",
      comment:
        "Enim nibh tristique proin pharetra malesuada aenean fames ac, amet. Aliquet eget pellentesque est quis.",
    },
    {
      id: 3,
      image: andrea,
      name: "Andrea Jonaththan",
      time: "21 minutes ago",
      comment:
        "Molestie aliquam, lacus dignissim volutpat cras. Aenean neque semper quam praesent morbi venenatis urna tempus.",
    },
  ];

  const [like, setLike] = useState(184);
  const [isLike, setIsLike] = useState(false);
  const [prevClicked, setPrevClicked] = useState(null);

  const initialCounts = { rose: 10, candle: 65, flowers: 98, ribbon: 5 };

  const [counts, setCounts] = useState({
    rose: 10,
    candle: 65,
    flowers: 98,
    ribbon: 5,
  });

  const [isLiked, setIsLiked] = useState({
    rose: false,
    candle: false,
    flowers: false,
    ribbon: false,
  });

  const likeButtonClick = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
  };

  const onLikeButtonClick = (iconName) => {
    setCounts((prevCounts) => {
      if (prevClicked && prevClicked !== iconName) {
        return {
          ...prevCounts,
          [prevClicked]: initialCounts[prevClicked],
          [iconName]: prevCounts[iconName] + (isLiked[iconName] ? -1 : 1),
        };
      } else {
        return {
          ...prevCounts,
          [iconName]: prevCounts[iconName] + (isLiked[iconName] ? -1 : 1),
        };
      }
    });

    setIsLiked((prevIsLiked) => ({
      ...prevIsLiked,
      [iconName]: !prevIsLiked[iconName],
    }));

    setPrevClicked(iconName);
  };

  const reactIcons = [
    { id: 1, name: "rose", img: rose },
    { id: 2, name: "candle", img: candle },
    { id: 3, name: "flowers", img: flowers },
    { id: 4, name: "ribbon", img: ribbon },
  ];

  return (
    <Box sx={{ backgroundColor: "#F9F9F9", padding: "15px 0" }}>
      <Container>
        {comments.map((item) => (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Grid item md={2}>
              <img
                src={item.image}
                alt="jenny"
                className={classes.commentImg}
              />
            </Grid>
            <Grid item md={10}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  lineHeight: "2",
                }}
              >
                <Box>
                  <Typography variant="p" sx={{ fontWeight: "bold" }}>
                    {item.name}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="p" sx={{ color: "#BFBFBF" }}>
                    {item.time}
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Typography
                  variant="p"
                  sx={{ color: "#868282", fontSize: "0.9rem" }}
                >
                  {item.comment}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                {reactIcons.map((icon) => (
                  <Chip
                    key={icon.id}
                    avatar={
                      <Avatar
                        src={icon.img}
                        alt=""
                        className={classes.reactIcons1}
                      />
                    }
                    label={counts[icon.name]}
                    onClick={() => onLikeButtonClick(icon.name)}
                    icon={
                      <Button sx={{ minWidth: 0, padding: 0 }}>
                        {isLiked[icon.name] ? (
                          <FavoriteIcon />
                        ) : (
                          <FavoriteBorderIcon />
                        )}
                      </Button>
                    }
                    sx={{
                      color: "#720CD4",
                      backgroundColor: "transparent",
                      height: "28px",
                    }}
                  />
                ))}
              </Box>
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
