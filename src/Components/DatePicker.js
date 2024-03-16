import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Typography } from "@mui/material";

export default function TheDatePicker({ label }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem>
        <DatePicker
          label={
            <Typography
              variant="p"
              fontFamily={"lato"}
              fontWeight={"bold"}
              alignItems={"center"}
            >
              {label}
            </Typography>
          }
          sx={{
            ".MuiOutlinedInput-root": {
              backgroundColor: "#f0f0f0",
              borderRadius: "20px",
              width: "150px",
              height: "30px",
            },
          }}
        />
      </DemoItem>
    </LocalizationProvider>
  );
}
