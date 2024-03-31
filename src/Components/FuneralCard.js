import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import React from "react";
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
import heart from "../Images/heart.png";
import comment from "../Images/comment.png";
import eye from "../Images/eye.png";

export default function FuneralCard() {
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
            />
            <span className={classes.span4}>London</span>
          </Typography>
        </Box>

        <FilledButton buttonText={"Donate"} className={classes.donateBtn} />
        <MoreVertIcon sx={{ marginTop: "-15px" }} />
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
        <Box>
          <img src={rose} alt="" className={classes.reactIcons} />
          <img src={candle} alt="" className={classes.reactIcons} />
          <img src={flowers} alt="" className={classes.reactIcons} />
          <img src={ribbon} alt="" className={classes.reactIcons} />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={heart} alt="" className={classes.heart} />
          <a href="">
            <img src={comment} alt="" className={classes.reactIcons} />
          </a>
          <img src={eye} alt="" className={classes.reactIcons} />
        </Box>
      </Box>
    </Box>
  );
}
