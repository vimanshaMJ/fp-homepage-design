import * as React from "react";
import classes from "./Navbar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
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
        <Toolbar>
          <Typography
            variant="h4"
            sx={{
              padding: "10px 0 15px 0",
              fontFamily: "lato",
              fontWeight: 700,
              color: "#5A189A",
              fontSize: "2rem",
            }}
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
            >
              Making Memories Live
            </Typography>
          </Typography>

          <FavoriteBorderOutlinedIcon
            sx={{ color: "#5A189A", padding: "0 2% 0 430px" }}
          />

          <FilledButton buttonText="LIST YOUR BUSINESS" />
          <OutlinedButton buttonText="NEWS FEED" />

          <Box sx={{ flexGrow: 1, display: "flex" }} className={classes.avatar}>
            <Avatar alt="" src={avatar} />
          </Box>
        </Toolbar>
      </Container>

      <Toolbar sx={{ backgroundColor: "#5A189A" }}>
        <Container>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "lato",
                fontWeight: 700,
                color: "white",
                paddingLeft: "2%",
                flexGrow: 1,
                textAlign: "center",
              }}
            >
              Obituaries
            </Typography>
            <SearchBtn />
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
