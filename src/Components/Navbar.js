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
import { color } from "@mui/system";
import Button from "@mui/material-next/Button";

const Search = styled("div")(({ theme }) => ({
  borderRadius: "50px",
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
    marginLeft: theme.spacing(76),
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
      width: "40ch",
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
              display: "flex",
              fontFamily: "lato",
              fontWeight: 700,
              color: "#5A189A",
            }}
          >
            Funerals
            <span className={classes.span1}>page</span>.
          </Typography>

          <Typography
            variant="p"
            sx={{
              fontFamily: "lato",
              fontWeight: 400,
              color: "black",
            }}
          >
            Making Memories Live
          </Typography>
          <FavoriteBorderOutlinedIcon
            sx={{ color: "#5A189A", padding: "0 2% 0 28%" }}
          />
          <Button
            size="small"
            variant="filled"
            sx={{
              fontFamily: "lato",
              fontSize: "0.7rem",
              backgroundColor: "#5A189A",
              color: "white",
              marginRight: "2%",
              fontWeight: 700,
            }}
          >
            {"LIST YOUR BUSINESS"}
          </Button>
          <Button
            size="small"
            variant="outlined"
            sx={{
              fontFamily: "lato",
              fontSize: "0.7rem",
              backgroundColor: "white",
              color: "#5A189A",
              border: "2px solid #5A189A",
              paddingLeft: "3%",
              paddingRight: "3%",
              fontWeight: 700,
            }}
          >
            {"NEWS FEED"}
          </Button>
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
