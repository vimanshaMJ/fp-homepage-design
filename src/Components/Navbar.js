import * as React from "react";
import classes from "./Navbar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import avatar from "../Images/girl.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FilledButton from "./FilledButton";
import OutlinedButton from "./OutlinedButton";
import SearchBtn from "./SearchBtn";

export default function Appbar() {
  return (
    <AppBar position="static" className={classes.appbar}>
      <Container>
        <Toolbar
          sx={{
            paddingLeft: "0 !important",
            paddingRight: "0 !important",
            justifyContent: "space-between",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                display: "flex",
              }}
              className={classes.navbarTitleContainer}
            >
              <Typography
                variant="h4"
                sx={{
                  padding: "10px 0 15px 0",
                  fontFamily: "lato",
                  fontWeight: 700,
                  color: "#5A189A",
                  fontSize: "2rem",
                }}
                className={classes.navbarTitle}
              >
                Funerals
                <span className={classes.span1}>page</span>.
                <br />
                <Typography
                  variant="p"
                  sx={{
                    display: "flex",
                    lineHeight: 0.5,
                    fontFamily: "lato",
                    fontWeight: 400,
                    color: "black",
                    fontSize: "1rem",
                  }}
                  className={classes.navbarTitleDec}
                >
                  Making Memories Live
                </Typography>
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sm={8}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
              className={classes.navbarbuttonContainer}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FavoriteBorderOutlinedIcon
                  sx={{
                    color: "#5A189A",
                    margin: "0 5px",
                  }}
                />

                <FilledButton
                  buttonText="LIST YOUR BUSINESS"
                  className={classes.listBtn}
                />
                <OutlinedButton
                  buttonText="NEWS FEED"
                  className={classes.newsBtn}
                />

                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                  className={classes.avatar}
                >
                  <Avatar alt="" src={avatar} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>

      <Toolbar
        sx={{
          backgroundColor: "#5A189A",
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
        }}
      >
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "lato",
                fontWeight: 700,
                color: "white",
              }}
              className={classes.navbarSubTitle}
            >
              Obituaries
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }} className={classes.searchBtn}>
            <SearchBtn />
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
