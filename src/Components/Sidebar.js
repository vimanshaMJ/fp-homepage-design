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
        flex: "1",
        flexDirection: "column",
        textAlign: "left",

        padding: "50px 0 50px 0",
      }}
    >
      <div className={classes.sidebardiv}>
        <TodayIcon className={classes.icon} />
        <h5 className={classes.sidebarTitle}>Plan Ahead</h5>
      </div>

      <div className={classes.sidebardiv}>
        <VolunteerActivismIcon className={classes.icon} />
        <h5 className={classes.sidebarTitle}>Bereavement Support</h5>
      </div>

      <div className={classes.sidebardiv}>
        <GavelIcon className={classes.icon} />
        <h5 className={classes.sidebarTitle}>Law & Advice</h5>
      </div>

      <div className={classes.sidebardiv}>
        <DrawIcon className={classes.icon} />
        <h5 className={classes.sidebarTitle}>Funeral Wishes</h5>
      </div>

      <div className={classes.sidebardiv}>
        <AccountCircleIcon className={classes.icon} />
        <h5 className={classes.sidebarTitle}>Funeral Directors</h5>
      </div>

      <div className={classes.sidebardiv}>
        <ContactsIcon className={classes.icon} />
        <h5 className={classes.sidebarTitle}>Obituaries</h5>
      </div>
    </Box>
  );
}
