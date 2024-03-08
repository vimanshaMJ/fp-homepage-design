import * as React from "react";
import classes from "./Navbar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import avatar from "../Images/girl.png";

export default function Appbar() {
  return (
    <AppBar position="static" className={classes.appbar}>
      <Container minWidth="xl">
        <Toolbar>
          <Typography
            variant="h4"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "lato",
              fontWeight: 700,
              color: "#5A189A",
            }}
          >
            Funerals
            <span className={classes.span1}>page</span>.
          </Typography>
          <br />
          <Typography
            variant="p"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "lato",
              fontWeight: 400,
              color: "black",
            }}
          >
            Making Memories Live
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            <Avatar alt="" src={avatar} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
