import * as React from "react";
import classes from "./Navbar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import avatar from "../Images/girl.png";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FilledButton from "./FilledButton";
import OutlinedButton from "./OutlinedButton";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  color: "grey",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.9),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.7),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(70),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontFamily: "lato",
  color: "inherit",
  "& .MuiInputBase-input": {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(0.5em + ${theme.spacing(0.5)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "44ch",
    },
  },
}));

export default function Appbar() {
  return (
    <AppBar position="static" className={classes.appbar}>
      <Container>
        <Toolbar>
          <Typography
            variant="h4"
            sx={{
              paddingTop: "10px",
              paddingBottom: "15px",
              fontFamily: "lato",
              fontWeight: 700,
              color: "#5A189A",
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
                fontSize: "0.8rem",
              }}
            >
              Making Memories Live
            </Typography>
          </Typography>

          <FavoriteBorderOutlinedIcon
            sx={{ color: "#5A189A", padding: "0 2% 0 423px" }}
          />

          <FilledButton buttonText="LIST YOUR BUSINESS" />
          <OutlinedButton buttonText="NEWS FEED" />

          <Box sx={{ flexGrow: 1, display: "flex" }} className={classes.avatar}>
            <Avatar alt="" src={avatar} />
          </Box>
        </Toolbar>
      </Container>

      <Toolbar sx={{ backgroundColor: "#5A189A" }}>
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            fontFamily: "lato",
            fontWeight: 700,
            color: "white",
            paddingLeft: "13%",
          }}
        >
          Obituaries
        </Typography>
        <Search>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
}
