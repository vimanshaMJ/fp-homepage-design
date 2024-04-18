import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import classes from "./FuneralCard.module.css";
import img1 from "../Images/img1.png";
import manImg from "../Images/man.png";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import FilledButton from "./FilledButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import youtube from "../Images/youtube.png";
import instagram from "../Images/instagram.png";
import rose from "../Images/rose.png";
import candle from "../Images/candle.png";
import flowers from "../Images/flowers.png";
import ribbon from "../Images/ribbon.png";
import comment from "../Images/comment.png";
import eye from "../Images/eye.png";
import Chip from "@mui/material/Chip";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import CommentSection from "./CommentSection";

export default function FuneralCard() {
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

  const [showComments, setShowComments] = useState(false);

  return (
    <Box
      sx={{
        fontFamily: "lato",
        border: "1px solid #E5E5E5",
        borderRadius: "8px",
        marginBottom: "20px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
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
        className={classes.cardTitleBar}
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
            className={classes.funeralCardName}
          >
            Chadwick Brown
          </Typography>

          <Typography
            variant="p"
            sx={{ fontSize: "small", color: "#868282" }}
            className={classes.bornDied}
          >
            Born:
            <span className={classes.span2}>
              12 <sup>th</sup> January 1989
            </span>{" "}
            Died:{" "}
            <span className={classes.span3}>
              24 <sup>th</sup> June 2020
            </span>
          </Typography>

          <Typography variant="p" sx={{ fontSize: "small", fontWeight: "900" }}>
            Death Notice
          </Typography>

          <Typography variant="p" sx={{ fontSize: "small", fontWeight: "600" }}>
            12 days ago
            <FmdGoodIcon
              sx={{
                position: "relative",
                margin: "0 2px -6px 15px",
                width: "20px",
              }}
              className={classes.fmdGoodIcon}
            />
            <span className={classes.span4}>London</span>
          </Typography>
        </Box>

        <FilledButton buttonText={"Donate"} className={classes.donateBtn} />
        <MoreVertIcon
          sx={{ marginTop: "-15px" }}
          className={classes.moreVertIcon}
        />
      </Box>

      <Typography
        variant="h5"
        sx={{
          color: "#868282",
          padding: "20px 20px 0 20px",
          fontSize: "0.95rem",
          fontFamily: "lato",
          lineHeight: "1.5",
        }}
        className={classes.funeralCardText}
      >
        Venenatis, quis risus justo, nisl, lorem venenatis. Nunc, pulvinar amet
        in odio ac tellus suscipit. Nibh commodo auctor vivamus id tincidunt.
        Venenatis, quis risus justo, nisl, lorem venenatis. Nunc, pulvinar amet
        in odio ac tellus suscipit. Nibh commodo auctor vivamus id tincidunt.{" "}
        <a href="" className={classes.readMore}>
          Read More
        </a>
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: "25px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={facebook} alt="" className={classes.socialIcon} />
          <img src={twitter} alt="" className={classes.socialIcon} />
          <img src={instagram} alt="" className={classes.socialIcon} />
          <img src={youtube} alt="" className={classes.socialIcon} />
        </Box>

        <a href="" className={classes.bibliograpy}>
          Bibliography
        </a>
      </Box>
      <hr className={classes.hrLine} />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "0 20px 20px 10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {reactIcons.map((icon) => (
            <Chip
              key={icon.id}
              avatar={
                <Avatar src={icon.img} alt="" className={classes.reactIcons1} />
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

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Chip
            icon={
              <Button
                sx={{ minWidth: "0", padding: "0 2px" }}
                className={classes.reactBtn}
              >
                {isLike ? (
                  <FavoriteIcon
                    sx={{ color: "#720CD4" }}
                    onClick={likeButtonClick}
                  />
                ) : (
                  <FavoriteBorderIcon
                    sx={{ color: "#720CD4" }}
                    onClick={likeButtonClick}
                  />
                )}
              </Button>
            }
            label={like}
            sx={{
              color: "#720CD4",
              backgroundColor: "#F2E4FF",
              height: "28px",
              alignItems: "center",
              marginRight: "10px",
            }}
          />

          <a href="#" onClick={() => setShowComments(!showComments)}>
            <img src={comment} alt="" className={classes.reactIcons} />
          </a>

          <img src={eye} alt="" className={classes.eye} />
        </Box>
      </Box>

      {showComments && <CommentSection />}
    </Box>
  );
}
