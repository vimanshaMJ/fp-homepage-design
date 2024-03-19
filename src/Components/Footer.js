import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import React from "react";
import classes from "./Footer.module.css";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import instagram from "../Images/instagram.png";
import youtube from "../Images/youtube.png";

export default function Footer() {
  return (
    <Box
      sx={{
        marginBottom: "5%",
        padding: "2% 10%",
        textAlign: "left",
        fontFamily: "lato",
        fontSize: "0.9rem",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={facebook} alt="" className={classes.socialIcon} />
          <img src={twitter} alt="" className={classes.socialIcon} />
          <img src={instagram} alt="" className={classes.socialIcon} />
          <img src={youtube} alt="" className={classes.socialIcon} />
        </Box>
        <Box sx={{ display: "flex", marginLeft: "700px" }}>
          <Typography variant="p" sx={{ padding: "0 20px", color: "#747480" }}>
            Blog
          </Typography>
          <Typography variant="p" sx={{ padding: "0 20px", color: "#747480" }}>
            Help / FAQ
          </Typography>
          <Typography variant="p" sx={{ padding: "0 20px", color: "#747480" }}>
            Contact Us
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", marginTop: "10px" }}>
        <Typography variant="p" sx={{ color: "#747480" }}>
          ©2021 www.funreralspage.com. All rights reserved.
        </Typography>

        <Box sx={{ display: "flex", marginLeft: "430px" }}>
          <Typography variant="p" sx={{ color: "#747480", padding: "0 20px" }}>
            Cookie Policy
          </Typography>
          <Typography variant="p" sx={{ color: "#747480", padding: "0 20px" }}>
            Privacy Policy
          </Typography>
          <Typography variant="p" sx={{ color: "#747480", padding: "0 20px" }}>
            Terms & Conditions
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
