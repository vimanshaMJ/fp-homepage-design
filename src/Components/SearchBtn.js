import React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export default function SearchBtn() {
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

  return (
    <Search>
      <StyledInputBase
        placeholder={"Search"}
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}
