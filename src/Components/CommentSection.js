import * as React from "react";
import classes from "./CommentSection.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import jonny from "../Images/jonny.png";
import jessy from "../Images/jessy.png";
import andrea from "../Images/andrea.png";
import { Typography } from "@mui/material";

export default function CommentSection() {
  const comments = [
    {
      id: 1,
      image: jonny,
      name: "Jonny Peterz",
      time: "21 minutes ago",
      comment:
        "Mi ultricies dolor, quis risus, risus. Nisi, lacinia feugiat gravida sed tortor neque risus risus diam.",
    },
    {
      id: 2,
      image: jessy,
      name: "Jessy Peterz",
      time: "21 minutes ago",
      comment:
        "Enim nibh tristique proin pharetra malesuada aenean fames ac, amet. Aliquet eget pellentesque est quis.",
    },
    {
      id: 3,
      image: andrea,
      name: "Andrea Jonaththan",
      time: "21 minutes ago",
      comment:
        "Molestie aliquam, lacus dignissim volutpat cras. Aenean neque semper quam praesent morbi venenatis urna tempus.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#F9F9F9", padding: "15px 0" }}>
      <Container>
        {comments.map((item) => (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Grid item md={2}>
              <img
                src={item.image}
                alt="jenny"
                className={classes.commentImg}
              />
            </Grid>
            <Grid item md={10}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  lineHeight: "2",
                }}
              >
                <Box>
                  <Typography variant="p" sx={{ fontWeight: "bold" }}>
                    {item.name}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="p" sx={{ color: "#BFBFBF" }}>
                    {item.time}
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Typography
                  variant="p"
                  sx={{ color: "#868282", fontSize: "0.9rem" }}
                >
                  {item.comment}
                </Typography>
              </Box>
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
