import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import React from "react";
import classes from "./Footer.module.css";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import instagram from "../Images/instagram.png";
import youtube from "../Images/youtube.png";

export default function Footer() {
  return (
    <Container>
      <Box
        sx={{
          marginBottom: "5%",
          padding: "2% 0",
          textAlign: "left",
          fontFamily: "lato",
          fontSize: "0.9rem",
        }}
        className={classes.footer}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={facebook} alt="" className={classes.socialIcon} />
            <img src={twitter} alt="" className={classes.socialIcon} />
            <img src={instagram} alt="" className={classes.socialIcon} />
            <img src={youtube} alt="" className={classes.socialIcon} />
          </Box>
          <Box
            sx={{
              display: "flex",
              fontSize: "small",
            }}
            className={classes.footerTextBox1}
          >
            <Typography
              variant="p"
              sx={{ paddingLeft: { xs: "10px", sm: "30px" }, color: "#747480" }}
            >
              Blog
            </Typography>
            <Typography
              variant="p"
              sx={{ paddingLeft: { xs: "10px", sm: "30px" }, color: "#747480" }}
            >
              Help / FAQ
            </Typography>
            <Typography
              variant="p"
              sx={{ paddingLeft: { xs: "10px", sm: "30px" }, color: "#747480" }}
            >
              Contact Us
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="p"
            sx={{ color: "#747480", fontSize: "small" }}
            className={classes.copyright}
          >
            ©2021 www.funreralspage.com. All rights reserved.
          </Typography>

          <Box
            sx={{
              display: "flex",
              fontSize: "small",
              textAlign: "right",
            }}
            className={classes.footerTextBox1}
          >
            <Typography
              variant="p"
              sx={{ color: "#747480", paddingLeft: { xs: "10px", sm: "30px" } }}
            >
              Cookie Policy
            </Typography>
            <Typography
              variant="p"
              sx={{ color: "#747480", paddingLeft: { xs: "10px", sm: "30px" } }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "#747480",
                paddingLeft: { xs: "10px", sm: "30px" },
              }}
            >
              Terms & Conditions
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
