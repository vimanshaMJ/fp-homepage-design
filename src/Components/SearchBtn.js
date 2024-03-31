import React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export default function SearchBtn() {
  const Search = styled("div")(({ theme, className }) => ({
    className: className,
    position: "relative",
    color: "grey",
    backgroundColor: alpha(theme.palette.common.white, 0.9),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.7),
    },

    borderRadius: "30px",
    width: "100%",
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
