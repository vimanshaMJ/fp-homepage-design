import * as React from "react";
import classes from "./Sidebar.module.css";
import Box from "@mui/material/Box";
import TodayIcon from "@mui/icons-material/Today";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import GavelIcon from "@mui/icons-material/Gavel";
import DrawIcon from "@mui/icons-material/Draw";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactsIcon from "@mui/icons-material/Contacts";

export default function Sidebar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        width: "18%",
        padding: "2% 0 2% 13.5%",
      }}
    >
      <div className={classes.sidebardiv}>
        <TodayIcon className={classes.icon} />
        <h4>Plan Ahead</h4>
      </div>

      <div className={classes.sidebardiv}>
        <VolunteerActivismIcon className={classes.icon} />
        <h4>Bereavement Support</h4>
      </div>

      <div className={classes.sidebardiv}>
        <GavelIcon className={classes.icon} />
        <h4>Law & advice</h4>
      </div>

      <div className={classes.sidebardiv}>
        <DrawIcon className={classes.icon} />
        <h4>Funeral Wishes</h4>
      </div>

      <div className={classes.sidebardiv}>
        <AccountCircleIcon className={classes.icon} />
        <h4>Funeral Directors</h4>
      </div>

      <div className={classes.sidebardiv}>
        <ContactsIcon className={classes.icon} />
        <h4>Obituaries</h4>
      </div>
    </Box>
  );
}
